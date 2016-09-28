#-*- coding:utf-8 -*-

from django import forms
from zhihuuser.models import ZhihuUser


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
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':u"密码", 'aria-label':u"密码",}),
                                label=u"",
                                required=True,
                                )
    
    class Meta:
        model = ZhihuUser
        fields = ['fullname','email','password']
    
    
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