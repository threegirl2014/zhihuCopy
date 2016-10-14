#-*- coding: utf-8 -*-
from django import forms
from questions.models import Question, Reply

class addQuestionForm(forms.ModelForm):
    title = forms.CharField(widget=forms.Textarea(
                                                   attrs={
                                                          'class':"form-control",
                                                          'placeholder':u"写下你的问题",
                                                          'name':"title",
                                                          }
                                                   ),
                            max_length=150,
                            label=u"",
                            required=True,
                            error_messages={
                                            'required':u"请填写问题标题",
                                            'max_length':u"标题过长（<150字符）",
                                            }
                            )
    details = forms.CharField(widget=forms.Textarea(
                                                   attrs={
                                                          'class':"form-control",
                                                          'placeholder':u"问题背景、条件等详细信息",
                                                          'name':"details",
                                                          }
                                                   ),
                              max_length=500,
                              required=False,
                              error_messages={
                                              'max_length':u"简介过长（<500字符）",
                                              }                              
                              )
    topics = forms.CharField(widget=forms.Textarea(
                                                   attrs={
                                                          'class':"form-control",
                                                          'placeholder':u"搜索话题",
                                                          'name':"topics",
                                                          }
                                                   ),
                             max_length=50,
                             required=False,
                             )
    
    class Meta:
        model = Question
        fields = ['title', 'details', 'topics',]
        
class addReplyForm(forms.ModelForm):
    details = forms.CharField(widget=forms.Textarea(
                                                    attrs={
                                                           'class':"form-control",
                                                           'placeholder':u"写回答…",
                                                           'name':'details',
                                                           'required':'True',
                                                           }
                                                    ),
                              max_length=5000,
                              label=u"",
                              required=True,
                              error_messages={
                                              'required':u"请填写回答内容",
                                              'max_length':u"回答内容过长（<5k字符）",
                                              }
                              )
    
    class Meta:
        model = Reply
        fields = ['details',]