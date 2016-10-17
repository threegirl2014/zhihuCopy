from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save
from questions.models import UserNotificationCounter
from django.core.urlresolvers import reverse

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
    
    followers = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='myFans')
    followees = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='BigVips')
    
    topics = models.ManyToManyField('questions.Topic', blank=True, related_name='followers')
    questions = models.ManyToManyField('questions.Question', blank=True, related_name='followers')
    
    browser_count = models.IntegerField(default=0)
    agree = models.IntegerField(default=0)
    thanks = models.IntegerField(default=0)
    asks_count = models.IntegerField(default=0)
    answers_count = models.IntegerField(default=0)
    posts_count = models.IntegerField(default=0)
    collections_count = models.IntegerField(default=0)
    logs_count = models.IntegerField(default=0)
    
    
    def __unicode__(self):
        return self.user.username
    
    def get_absolute_url(self):
        return reverse('people',kwargs={'name':self.user.username})
    
    def save(self,*args,**kwargs):
        
        super(ZhihuUser,self).save(*args,**kwargs)
        
@receiver(post_save,sender=ZhihuUser)
def createUserNotificationCounter(instance,created,**kwargs):
    if created:
        UserNotificationCounter.objects.create(pk=instance.id)