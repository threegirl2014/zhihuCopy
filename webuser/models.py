from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.



class WebUser(AbstractUser):
    GENDERS = (
               ('M','Male'),
               ('F','Female'),
               )
    
    fullname = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDERS, default='M')
    avatar = models.ImageField(upload_to='user/avatar')
    headline_brief = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=50)
    business = models.CharField(max_length=50)
    education = models.CharField(max_length=50)
    employment = models.CharField(max_length=50)
    
    followers = models.ManyToManyField("self")
    followees = models.ManyToManyField("self")
    
#     topics = 
#    columns = 
    
    browser_count = models.IntegerField(default=0)
    agree = models.IntegerField(default=0)
    thanks = models.IntegerField(default=0)
    
    
    def __unicode__(self):
        return self.username