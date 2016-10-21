from __future__ import unicode_literals

from django.db import models
from django.core.urlresolvers import reverse
from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save, post_delete
from django.db.models import F, Q

from django_redis import get_redis_connection
# Create your models here.


class Topic(models.Model):
    name = models.CharField(max_length=50)
    father_topics = models.ManyToManyField('self',verbose_name='father topics',related_name='sons', blank=True, symmetrical=False)
    description = models.TextField(blank=True)
    followers_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('topic', kwargs={'topic_id':self.id})
    
    
    
class Question(models.Model):
    topics = models.ManyToManyField(Topic)
    author = models.ForeignKey('zhihuuser.ZhihuUser', related_name='isAuthor')
    title = models.CharField(max_length=200)
    details = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)    
    comments_count = models.IntegerField(default=0)
    followers_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('question', kwargs={'question_id':self.id})     
     
class Reply(models.Model):
    OPINIONS = (
            ('N', 'No'),
            ('U', 'Up'),
            ('D', 'Down'),
           )
    question = models.ForeignKey(Question,related_name='replies')
    author = models.ForeignKey('zhihuuser.ZhihuUser')
    details = models.TextField()
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    up_vote = models.IntegerField(default=0)
    down_vote = models.IntegerField(default=0)
    votepeoples = models.ManyToManyField('zhihuuser.ZhihuUser', through='UpDownVote', related_name='votedreplies')
    thanks = models.IntegerField(default=0) 
    comments_count = models.IntegerField(default=0)
    updownflag = models.CharField(max_length=1, choices=OPINIONS, default='N')
    
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
    
class UpDownVote(models.Model):
    OPINIONS = (
                ('U', 'Up'),
                ('D', 'Down'),
               )
    reply = models.ForeignKey(Reply)
    voteman = models.ForeignKey('zhihuuser.ZhihuUser')
    opinions = models.CharField(max_length=1, choices=OPINIONS,blank=True) 
    
class Notification(models.Model):
    NOTIFY_TYPE = (
                   ('F','follower'),
                   ('U','upvote'),
                   ('UC','upvoteComment'),
                   ('T','thanks'),
                   ('C','comment'),
                   ('RQ','replyFromQuestion'),
                   ('RF','replyFromFollowee'),
                   ('UF','upvoteFromFollowee'),
                   ('IF','interestFromFollowee'),
                   ('CF', 'createdFromFollowee'),
                   )
    create_date = models.DateTimeField(auto_now_add=True)
    notify_from_user = models.ForeignKey('zhihuuser.ZhihuUser', related_name='notify_from_user')
    notify_to_user = models.ForeignKey('zhihuuser.ZhihuUser', related_name='notify_to_user')
    has_read = models.BooleanField(default=False)
    
#     notify_topic = models.ForeignKey(Topic, related_name='notify_topic', blank=True)
    notify_question = models.ForeignKey(Question, related_name='notify_question', blank=True, null=True)
    notify_reply = models.ForeignKey(Reply, related_name='notify_reply', blank=True, null=True)
    notify_comment = models.ForeignKey(Comment, related_name='notify_comment', blank=True, null=True)
    
    notify_type = models.CharField(max_length=2,choices=NOTIFY_TYPE)

    class Meta:
        ordering = ['-create_date']
    
    def __unicode__(self):
        return self.notify_type

class UserNotificationCounter(models.Model):
    user_id = models.IntegerField(primary_key=True)
    unread_count = models.IntegerField(default=0)
    
    def __unicode__(self):
        return "user unread notifications count: id={0},count={1}".format(self.user_id, self.unread_count)

    
def createNotifications(from_user,to_user,notify_type,topic=None,question=None,reply=None,comment=None):
    if from_user == to_user:
        return
    if notify_type == 'F':
        Notification.objects.create(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type,
                            )
    elif notify_type == 'U' or notify_type == 'T':
        Notification.objects.create(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type,
                            notify_question=question,
                            notify_reply=reply,                            
                            )
    elif notify_type == 'UC' or notify_type == 'C':
        Notification.objects.create(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type,
                            notify_question=question,
                            notify_reply=reply, 
                            notify_comment=comment,                           
                            )    
    elif notify_type == 'RQ' or notify_type == 'RF' \
      or notify_type == 'UF':
        for user in to_user:
            if from_user == to_user:
                continue
            Notification.objects.create(
                                notify_from_user=from_user,
                                notify_to_user=user,
                                notify_type=notify_type,
                                notify_question=question,
                                notify_reply=reply,                            
                                )
    elif notify_type == 'CF' or notify_type == 'IF':
        for user in to_user:
            if from_user == to_user:
                continue
            Notification.objects.create(
                                notify_from_user=from_user,
                                notify_to_user=user,
                                notify_type=notify_type,
                                notify_question=question,                          
                                )                     

def deleteNotifications(from_user,to_user,notify_type,topic=None,question=None,reply=None,comment=None):
    if notify_type == 'F':
        notification = Notification.objects.get(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type,                                                
                                            )
        notification.delete()
    elif notify_type == 'U' or notify_type == 'T':
        notification = Notification.objects.get(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type, 
                            notify_question=question,
                            notify_reply=reply,                                                
                                            )
        notification.delete()
    elif notify_type == 'UC' or notify_type == 'C':
        notification = Notification.objects.get(
                            notify_from_user=from_user,
                            notify_to_user=to_user,
                            notify_type=notify_type,
                            notify_question=question,
                            notify_reply=reply, 
                            notify_comment=comment,                           
                            )
        notification.delete()             
    elif notify_type == 'RQ' or notify_type == 'RF' \
      or notify_type == 'UF':
        for user in to_user:
            notification = Notification.objects.get(
                                notify_from_user=from_user,
                                notify_to_user=user,
                                notify_type=notify_type,
                                notify_question=question,
                                notify_reply=reply,                            
                                ) 
            notification.delete()
    elif notify_type == 'CF' or notify_type == 'IF':
        for user in to_user:
            notification = Notification.objects.get(
                                notify_from_user=from_user,
                                notify_to_user=user,
                                notify_type=notify_type, 
                                notify_question=question,                                              
                                                )
            notification.delete() 
        
        
RK_NOTIFICATIONS_COUNTER = 'redis_pending_counter_changes'            
def update_unread_count(user_id,count):
#     UserNotificationCounter.objects.filter(pk=user_id).update(unread_count = F('unread_count') + count)
    con = get_redis_connection('default')
    con.zincrby(RK_NOTIFICATIONS_COUNTER, str(user_id), count)


@receiver(post_save,sender=Notification)
def incr_notifications_counter(instance,created,**kwargs):
    print 'CREATE: ',instance.notify_from_user,instance.notify_to_user,instance.notify_type
    if created and not instance.has_read:
        update_unread_count(instance.notify_to_user.id, 1)
    else:
        return 
    
@receiver(post_delete,sender=Notification)
def decr_notifications_counter(instance,**kwargs): 
    print 'DELETE: ',instance.notify_from_user,instance.notify_to_user,instance.notify_type
    if not instance.has_read:
        update_unread_count(instance.notify_to_user.id, -1)
    else:
        return 
    
def mark_as_read(user,notificationType=None):
    rows = 0
    if notificationType == None:
        print 'MARK ALL: ', user
        rows = Notification.objects.filter(notify_to_user=user,has_read=False).update(has_read=True)
    else:
        raw = Notification.objects.filter(notify_to_user=user,has_read=False)
        if notificationType == 'user':
            rows = raw.filter( Q(notify_type='F') ).update(has_read=True)
        elif notificationType == 'thanks':
            rows = raw.filter( Q(notify_type='U') | Q(notify_type='T') ).update(has_read=True)
        elif notificationType == 'common':
            rows = raw.filter( Q(notify_type='RF') | Q(notify_type='RQ') \
                            | Q(notify_type='CF') | Q(notify_type='IF') ).update(has_read=True)
    update_unread_count(user.id, 0-rows)             