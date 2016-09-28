#-*- coding:utf-8 -*-

from django import forms
from zhihuuser.models import ZhihuUser
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

def ForbiddenUsernamesValidator(value):
    forbidden_usernames = ['admin', 'settings', 'news', 'about', 'help', 'signin', 'signup', 
        'signout', 'terms', 'privacy', 'cookie', 'new', 'login', 'logout', 'administrator', 
        'join', 'account', 'username', 'root', 'blog', 'user', 'users', 'billing', 'subscribe',
        'reviews', 'review', 'blog', 'blogs', 'edit', 'mail', 'email', 'home', 'job', 'jobs', 
        'contribute', 'newsletter', 'shop', 'profile', 'register', 'auth', 'authentication',
        'campaign', 'config', 'delete', 'remove', 'forum', 'forums', 'download', 'downloads', 
        'contact', 'blogs', 'feed', 'feeds', 'faq', 'intranet', 'log', 'registration', 'search', 
        'explore', 'rss', 'support', 'status', 'static', 'media', 'setting', 'css', 'js',
        'follow', 'activity', 'questions', 'articles', 'network',]
    if value.lower() in forbidden_usernames:
        raise ValidationError(u'被限制用户名')    

# def InvalidUsernameValidator(value):
#     
# def UniqueUsernameValidator(value):

def UniqueEmailValidator(value):
    if User.objects.filter(email__exact=value).exists():
        raise ValidationError(u'该邮箱已被注册')

def LengthPassowrdValidator(value):
    if len(value) < 6:
        raise ValidationError(u'密码少于6位')

class SignUpForm(forms.ModelForm):
    fullname = forms.CharField(widget=forms.TextInput(attrs={'placeholder':u"姓名", 'aria-label':u"姓名",}),
                               max_length=30,
                               label=u"",
                               required=True,
#                                help_text='用户名最好包括 <strong>字母和数字</strong>, <strong>特殊</strong> 字符'
                               ) 
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder':u"邮箱", 'aria-label':u"邮箱",}),
                             max_length=75,
                             label=u"",
                             required=True,
                             )
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':u"密码(不少于6位)", 'aria-label':u"密码",}),
                                label=u"",
                                required=True,
                                )
    
    class Meta:
        model = ZhihuUser
        fields = ['fullname','email','password']
    
    def __init__(self,*args,**kwargs):
        super(SignUpForm,self).__init__(*args,**kwargs)
        self.fields['fullname'].validators.append(ForbiddenUsernamesValidator)
        self.fields['email'].validators.append(UniqueEmailValidator)
        self.fields['password'].validators.append(LengthPassowrdValidator)
        
class LoginForm(forms.ModelForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder':u"邮箱", 'aria-label':u"邮箱",}),
                             max_length=75,
                             label=u"",
                             required=True,
                             )
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':u"密码", 'aria-label':u"密码",}),
                               label=u"",
                               required=True,                            
                               )
    class Meta:
        model = ZhihuUser
        fields = ['email','password']