from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from questions.models import Topic

# Create your models here.



class ZhihuUser(models.Model):
    GENDERS = (
               ('M','Male'),
               ('F','Female'),
               )
    user = models.OneToOneField(User)
    fullname = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDERS, default='M')
    avatar = models.ImageField(upload_to='user/avatar/', default='user/avatar/default_s.jpg')
    headline_brief = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=50, blank=True)
    business = models.CharField(max_length=50, blank=True)
    education = models.CharField(max_length=50, blank=True)
    employment = models.CharField(max_length=50, blank=True)
    
    followers = models.ManyToManyField('self', blank=True)
    followees = models.ManyToManyField('self', blank=True)
    
    topics = models.ManyToManyField(Topic, blank=True)
    
    browser_count = models.IntegerField(default=0)
    agree = models.IntegerField(default=0)
    thanks = models.IntegerField(default=0)
    questions_count = models.IntegerField(default=0)
    replies_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return self.user.username
    
    def save(self,*args,**kwargs):
        
        super(ZhihuUser,self).save(*args,**kwargs)