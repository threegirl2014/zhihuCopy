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
        zhihuuser = ZhihuUser.objects.get(user=request.user)        
        args = dict()
        args['zhihuuser'] = zhihuuser
        args['user'] = zhihuuser.user
        return render(request,"zhihuuser/home.html",args)
    else:
        args = dict()
        args['register_email_form'] = SignUpForm()
        args['login_email_form'] = LoginForm()
        return render(request,"zhihuuser/not_logged_in.html",args)

# @login_required
def people(request,name):
    user = User.objects.get(username=name)
    zhihuuser = ZhihuUser.objects.get(user=user)
    args = dict()
    args['zhihuuser'] = zhihuuser
    args['user'] = user
    return render(request,"zhihuuser/people.html",args)

def weblogout(request):
    logout(request)
    return redirect('/')


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