from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from unidecode import unidecode
from zhihuuser.forms import LoginForm, SignUpForm
from zhihuuser.models import ZhihuUser
from django.template.context import RequestContext
from django.conf import settings
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
        if not form.is_valid():
            args = dict()
            args['register_email_form'] = SignUpForm()
            args['login_email_form'] = form
            return render(request,"zhihuuser/not_logged_in.html",args)
        else:
            email = form.cleaned_data.get("email")
            password = form.cleaned_data.get("password")
            user = authenticate(email=email,password=password)
            login(request,user)
            return redirect('/')
    else:
        return home(request)

def home(request):
    if request.user.is_authenticated():
        return render(request,"zhihuuser/home.html")
    else:
        args = dict()
        args['register_email_form'] = SignUpForm()
        args['login_email_form'] = LoginForm()
        return render(request,"zhihuuser/not_logged_in.html",args)

def people(request,name):
    user = User.objects.get(username=name)
    zhihuuser = ZhihuUser.objects.get(user=user)
    args = dict()
    args['fullname'] = zhihuuser.fullname
    args['username'] = user.username
    args['avatar'] = zhihuuser.avatar.url
    return render(request,"zhihuuser/people.html",args)