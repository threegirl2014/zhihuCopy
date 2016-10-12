from __future__ import unicode_literals

from django.db import models
from django.core.urlresolvers import reverse

# Create your models here.


class Topic(models.Model):
    name = models.CharField(max_length=50)
    father_topics = models.ManyToManyField('self',verbose_name='father topics',related_name='sons', blank=True, symmetrical=False)
    description = models.TextField(blank=True)
    followers_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return self.name
    
    def get_absolute_url(self):
        pass
    
    
    
class Question(models.Model):
    topics = models.ManyToManyField(Topic)
    author = models.ForeignKey('zhihuuser.ZhihuUser')
    title = models.CharField(max_length=200)
    details = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)    
    comments_count = models.IntegerField(default=0)
    followers_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('question')     
     
class Reply(models.Model):
    question = models.ForeignKey(Question,related_name='replies')
    author = models.ForeignKey('zhihuuser.ZhihuUser')
    details = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    up_vote = models.IntegerField(default=0)
    down_vote = models.IntegerField(default=0)
    thanks = models.IntegerField(default=0) 
    comments_count = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-up_vote', 'down_vote', '-thanks', 'create_date'] 
     
class Comment(models.Model):
    question = models.ForeignKey(Question)
    reply = models.ForeignKey(Reply,blank=True)
    author = models.ForeignKey('zhihuuser.ZhihuUser',verbose_name='comment from')
    to_user = models.ForeignKey('zhihuuser.ZhihuUser',verbose_name='comment to',blank=True,related_name='to_user_comments')
    create_date = models.DateTimeField(auto_now_add=True)
    up_vote = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['create_date']
      