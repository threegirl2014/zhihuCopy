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

def home(request):
    if request.user.is_authenticated():
        zhihuuser = request.user.zhihuuser
        notify_from_followee = Notification.objects.filter(notify_to_user__id=zhihuuser.id).filter( Q(notify_type='RF') | Q(notify_type='UF') | Q(notify_type='IF') )
#         messages = Notification.objects.filter(notify_to_user__id=zhihuuser.id)
        args = dict()
        args['zhihuuser'] = zhihuuser
        args['user'] = zhihuuser.user
        args['notifies_from_followee'] = notify_from_followee
#         args['messages'] = messages
        args['message_count'] = UserNotificationCounter.objects.get(pk=zhihuuser.id).unread_count 
        return render(request,"zhihuuser/home.html",args)
    else:
        args = dict()
        args['register_email_form'] = SignUpForm()
        args['login_email_form'] = LoginForm()
        return render(request,"zhihuuser/not_logged_in.html",args)

@login_required
def people(request,name):
    stranger = ZhihuUser.objects.get(user__username=name)
    zhihuuser = request.user.zhihuuser
    args = dict()
    isfollow = True if zhihuuser.followees.filter(pk=stranger.id).exists() else False
    args['zhihuuser'] = zhihuuser
    args['stranger'] = stranger
    args['isfollow'] = isfollow
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