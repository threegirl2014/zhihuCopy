from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from unidecode import unidecode
from zhihuuser.forms import LoginForm, SignUpForm
from zhihuuser.models import ZhihuUser
from django.template.context import RequestContext
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.db.models import Q
   
from questions.models import Notification, UserNotificationCounter
from questions.models import createNotifications, deleteNotifications
from django.http.response import HttpResponse

import json
from django.utils.datastructures import MultiValueDictKeyError
# Create your views here. 

def generateUsername(fullname):
    #type( fullname ) : unicode
    #type( unidecode(fullname) ) : str
    #type( slugify(unidecode(fullname)) ) : django.utils.safestring.SafeText
    #type( slugify(unidecode(fullname)) + '-' ) : unicode
    #so the return type is unicode
    username = slugify(unidecode(fullname)) + '-'
    users = User.objects.filter(username__contains=username)
    return username + str(users.count())
    
    
def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if not form.is_valid():
            args = dict()
            args['register_email_form'] = form
            args['login_email_form'] = LoginForm()
            return render(request,"zhihuuser/not_logged_in.html",args)
        else:
            fullname = form.cleaned_data.get('fullname')
            username = generateUsername(fullname)
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            User.objects.create_user(username=username,password=password,email=email)
            user = authenticate(username=username,password=password)
            zhihuuser = ZhihuUser(user=user,fullname=fullname)
            zhihuuser.save()
            login(request,user)
            return redirect('/')
    else:
        return home(request)               

def weblogin(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        print form.is_valid()
        args = dict()
        args['register_email_form'] = SignUpForm()
        args['login_email_form'] = form
        if form.is_valid():
            email = form.cleaned_data.get("email")
            password = form.cleaned_data.get("password")
            print email,password
            user = User.objects.get(email__exact=email)
            new_user = authenticate(username=user.username,password=password)
            print 'login successfully'
            login(request,new_user)
            return redirect('/')
        else:
            return render(request,"zhihuuser/not_logged_in.html",args)
    else:
        return home(request)

STEP = 3

def home(request):
    if request.user.is_authenticated():
        zhihuuser = request.user.zhihuuser
        notify_from_followee = \
            Notification.objects.filter(notify_to_user__id=zhihuuser.id)\
                                .filter( Q(notify_type='RF') | \
                                         Q(notify_type='UF') | \
                                         Q(notify_type='IF') | \
                                         Q(notify_type='CF'))
        args = dict()
        args['zhihuuser'] = zhihuuser
        args['user'] = zhihuuser.user
        notify_num = notify_from_followee.count() 
        if notify_num >= STEP:
            new_notifies = notify_from_followee[:STEP]
            args['begin'] = notify_from_followee[0].id
            args['end'] = notify_from_followee[STEP-1].id
            args['count'] = STEP
        elif notify_num != 0:
            new_notifies = notify_from_followee
            args['begin'] = notify_from_followee[0].id
            args['end'] = notify_from_followee[notify_num-1].id
            args['count'] = notify_num
        else:
            new_notifies = notify_from_followee
            args['begin'] = 0
            args['end'] = 0
            args['count'] = 0
        args['notifies_from_followee'] = new_notifies
        print 'begin:{0},end:{1}'.format(args['begin'], args['end'])
        args['message_count'] = UserNotificationCounter.objects.get(pk=zhihuuser.id).unread_count 
        return render(request,"zhihuuser/home.html",args)
    else:
        args = dict()
        args['register_email_form'] = SignUpForm()
        args['login_email_form'] = LoginForm()
        return render(request,"zhihuuser/not_logged_in.html",args)

@login_required
def buttom(request):
    if request.method == 'GET':
        top = int(request.GET['top'])
        bottom = int(request.GET['bottom'])
        count = int(request.GET['count'])
        zhihuuser = request.user.zhihuuser
        if bottom:
            notify_from_followee = \
                Notification.objects.filter(notify_to_user__id=zhihuuser.id)\
                                    .filter( Q(notify_type='RF') | \
                                             Q(notify_type='UF') | \
                                             Q(notify_type='IF') | \
                                             Q(notify_type='CF'))
            notifies = notify_from_followee.filter(pk__lte=top) 
            if notifies.count() <= count + STEP:
                bottom_id = 0
            else:
                notifies = notifies[:count+STEP]
                bottom_id = notifies[count+STEP-1].id
            args = {}
            args['notifies_from_followee'] = notifies 
            response = render(request, 'zhihuuser/refresh.html', args)
            data = {'bottom_id':bottom_id,'response':response.content,'count':notifies.count()}
            return HttpResponse(json.dumps(data))

@login_required
def interval(request):
    if request.method == 'GET':
        try:
            top = int(request.GET['top_id'])
        except MultiValueDictKeyError,e:
            print e
            print request.GET, request.get_full_path(), request.user
            top = 0
        zhihuuser = request.user.zhihuuser
        if top:
            notify_from_followee = \
                Notification.objects.filter(notify_to_user__id=zhihuuser.id)\
                                    .filter( Q(notify_type='RF') | \
                                             Q(notify_type='UF') | \
                                             Q(notify_type='IF') | \
                                             Q(notify_type='CF'))
            notifies = notify_from_followee.filter(pk__gt=top)
            return HttpResponse(notifies.count())            
        return HttpResponse(0)
    
@login_required
def top(request):
    if request.method == 'GET':
        zhihuuser = request.user.zhihuuser
#         top = int(request.GET['top'])
#         bottom = int(request.GET['bottom'])
        count = int(request.GET['count'])   
        refresh = int(request.GET['refresh'])     
        if top:
            notify_from_followee = \
                Notification.objects.filter(notify_to_user__id=zhihuuser.id)\
                                    .filter( Q(notify_type='RF') | \
                                             Q(notify_type='UF') | \
                                             Q(notify_type='IF') | \
                                             Q(notify_type='CF'))
            notifies = notify_from_followee
            if notifies.count() > count + refresh:
                notifies = notifies[:count+refresh]
            top_id = notifies[0].id
            count = notifies.count()
            bottom_id = notifies[count-1].id
            args = {}
            args['notifies_from_followee'] = notifies             
            response = render(request,'zhihuuser/refresh.html',args)
            data = {'bottom_id':bottom_id,'top_id':top_id,'response':response.content,'count':notifies.count()}
            return HttpResponse(json.dumps(data))
        
@login_required
def people(request,name):
    stranger = ZhihuUser.objects.get(user__username=name)
    zhihuuser = request.user.zhihuuser
    args = dict()
    isfollow = True if zhihuuser.followees.filter(pk=stranger.id).exists() else False
    args['zhihuuser'] = zhihuuser
    args['stranger'] = stranger
    args['isfollow'] = isfollow
    args['message_count'] = UserNotificationCounter.objects.get(pk=zhihuuser.id).unread_count
    return render(request,"zhihuuser/people.html",args)

def weblogout(request):
    logout(request)
    return redirect('/')

@login_required
def modify_follow(request):
    if request.method == 'GET':
        flag = request.GET['flag']
        followee_id = request.GET['followee_id']
        follower_id = request.user.zhihuuser.id
        if followee_id:
            followee = ZhihuUser.objects.get(pk=followee_id)
            follower = ZhihuUser.objects.get(pk=follower_id)
            if flag == 'add':
                print 'add followee'
                follower.followees.add(followee)
                followee.followers.add(follower)
                createNotifications(from_user=follower,to_user=followee,notify_type='F')
            elif flag == 'del':
                print 'del followee'
                follower.followees.remove(followee)
                followee.followers.remove(follower)
                deleteNotifications(from_user=follower,to_user=followee,notify_type='F')
            return HttpResponse('success follow')
        
def show_asks(request,name):
    pass

def show_answers(request,name):
    pass

def show_posts(request,name):
    pass

def show_collections(request,name):
    pass

def show_logs(request,name):
    pass

def show_followees(request,name):
    pass

def show_followers(request,name):
    pass