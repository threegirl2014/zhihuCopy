from __future__ import unicode_literals

from django.db import models
# from zhihuuser.models import ZhihuUser

# Create your models here.


class Topic(models.Model):
    name = models.CharField(max_length=50)
    father_topics = models.ManyToManyField('self',verbose_name='father topics')
    son_topics = models.ManyToManyField('self',verbose_name='son topics')
    description = models.TextField(blank=True)
    followers_count = models.IntegerField(default=0)
    
    
# class Question(models.Model):
#     topics = models.ManyToManyField(Topic)
#     author = models.ForeignKey(ZhihuUser)
#     title = models.CharField(max_length=200)
#     details = models.TextField()
#     create_date = models.DateTimeField(auto_now_add=True)
#     update_date = models.DateTimeField(auto_now=True)    
#     comments_count = models.IntegerField(default=0)
#     
#     
# class Reply(models.Model):
#     question = models.ForeignKey(Question)
#     author = models.ForeignKey(ZhihuUser)
#     title = models.CharField(max_length=200)
#     details = models.TextField()
#     create_date = models.DateTimeField(auto_now_add=True)
#     update_date = models.DateTimeField(auto_now=True)
#     up_vote = models.IntegerField(default=0)
#     down_vote = models.IntegerField(default=0)
#     thanks = models.IntegerField(default=0) 
#     comments_count = models.IntegerField(default=0)
#     
#     
# class Comment(models.Model):
#     question = models.ForeignKey(Question)
#     reply = models.ForeignKey(Reply,blank=True)
#     author = models.ForeignKey(ZhihuUser,verbose_name='comment from')
#     to_user = models.ForeignKey(ZhihuUser,verbose_name='comment to',blank=True)
#     create_date = models.DateTimeField(auto_now_add=True)
#     up_vote = models.IntegerField(default=0)
      