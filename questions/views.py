from django.shortcuts import render, get_object_or_404
from .models import Question, Reply, Comment
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponse
from django.db.models import Q
from django.core.cache import cache
# Create your views here.

from zhihuuser.models import ZhihuUser
from questions.models import UpDownVote,Topic, Notification,\
    UserNotificationCounter
from .models import createNotifications, deleteNotifications, mark_as_read
from questions.forms import addQuestionForm, addReplyForm
from django.shortcuts import redirect

import json

def getQuestionArgs(request,question_id):
    q = get_object_or_404(Question,pk=question_id)
    replies = Reply.objects.filter(question__id=question_id)
    args = dict()
    args['q'] = q
    
    if 'sort' in request.GET:
        newSort = request.GET['sort']
        if newSort == 'created':
            args['replies'] = replies.order_by('create_date')
    else:
        args['replies'] = replies
    
    zhihuuser = request.user.zhihuuser
    args['zhihuuser'] = request.user.zhihuuser
    
    if zhihuuser.questions.filter(pk=question_id).exists():
        args['isfollow'] = True
    else:
        args['isfollow'] = False
    
    for reply in replies:
        if reply.votepeoples.filter(pk=zhihuuser.id).exists():
            updownvote = UpDownVote.objects.get(voteman=zhihuuser,reply=reply)
            reply.updownflag = updownvote.opinions
        else:
            reply.updownflag = 'N'
        reply.save()
    
    if Reply.objects.filter(question=q, author=zhihuuser).exists():
        args['hasReplied'] = True
    else:
        args['hasReplied'] = False

#     messages = Notification.objects.filter(notify_to_user__id=zhihuuser.id)
#     args['messages'] = messages
    args['message_count'] = UserNotificationCounter.objects.get(pk=zhihuuser.id).unread_count 
    
    return args

@login_required
def questionShow(request,question_id):
    args = getQuestionArgs(request, question_id)
    args['addReply'] = addReplyForm()
    return render(request, 'questions/question.html', args)

@login_required
def upVoteAnswer(request):
    print '>>>>>>>>upVoteAnswer'
    reply_id = None
    if request.method == 'GET':
        reply_id = request.GET['reply_id']
    
    if reply_id:
        reply = Reply.objects.get(pk=reply_id)
        user = request.user.zhihuuser
        if reply:
            if reply.votepeoples.filter(pk=user.id).exists():
                updownvote = UpDownVote.objects.get(reply=reply, voteman=user)
                if updownvote.opinions == 'D':
                    updownvote.opinions = 'U'
                    updownvote.save()
                    createNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                  
                else:
                    updownvote.delete()
                    deleteNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                          
            else:
                newVote = UpDownVote(reply=reply, voteman=user, opinions='U')
                newVote.save()
                createNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)
            #the method below can avoid some confilicts about different user's vote
            reply.up_vote = UpDownVote.objects.filter(reply=reply, opinions='U').count()
            reply.down_vote = UpDownVote.objects.filter(reply=reply, opinions='D').count()
            reply.save()
    return HttpResponse(reply.up_vote)

@login_required
def downVoteAnswer(request):
    print '>>>>>>>>downVoteAnswer'
    reply_id = None
    if request.method == 'GET':
        reply_id = request.GET['reply_id']
    
    if reply_id:
        reply = Reply.objects.get(pk=reply_id)
        user = request.user.zhihuuser
        if reply:
            if reply.votepeoples.filter(pk=user.id).exists():
                updownvote = UpDownVote.objects.get(reply=reply, voteman=user)
                if updownvote.opinions == 'U':
                    updownvote.opinions = 'D'
                    updownvote.save()
                    deleteNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                                              
                else:
                    updownvote.delete()
            else:
                newVote = UpDownVote(reply=reply, voteman=user, opinions='D')
                newVote.save()
            reply.up_vote = UpDownVote.objects.filter(reply=reply, opinions='U').count()
            reply.down_vote = UpDownVote.objects.filter(reply=reply, opinions='D').count()
            reply.save()
    return HttpResponse(reply.up_vote)

@login_required
def followQuestion(request):
    print '>>>>>>>>followQuestion'
    question_id = None
    if request.method == 'GET':
        question_id = request.GET['question_id']
        
    if question_id:
        q = Question.objects.get(pk=question_id)
        user = request.user.zhihuuser
        if user.questions.filter(pk=question_id).exists():
            user.questions.remove(q)
            q.followers_count = q.followers_count - 1
            print '>>>>>>>>>del: ', q.followers_count
        else:
            user.questions.add(q)
            q.followers_count = q.followers_count + 1
            print '>>>>>>>>>add: ', q.followers_count
        q.save()
    return HttpResponse(q.followers_count)

@login_required
def addQuestion(request):
    if request.method == "POST":
        form = addQuestionForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data.get('title')
            details = form.cleaned_data.get('details')
            topics = form.cleaned_data.get('topics')
            user = request.user.zhihuuser
            question = Question.objects.create(author=user, title=title, details=details)
            for item in topics.split(' '):
                topic = Topic.objects.get(name=item)
                question.topics.add(topic)
            return redirect(question) 

def topicSuggestion(request,max=6):
    start = request.GET['start']
    topics = []
    if start:
        topics = Topic.objects.filter(name__contains=start)
        if max > 0 and topics.count() > max:
            topics = topics[:max]
    data = []
    for topic in topics:
        item = dict()
        item['name'] = topic.name
        item['topic_id'] = topic.id
        data.append(item)
    args = dict()
    args['data'] = data
    return HttpResponse(json.dumps(args))

@login_required
def addReply(request,question_id):
    if request.method == "POST":
        form = addReplyForm(request.POST)
        if form.is_valid():
            details = form.cleaned_data.get('details')
            user = request.user.zhihuuser
            question = Question.objects.get(pk=question_id)
            reply = Reply.objects.create(author=user, details=details, question=question)
            return redirect(question)
        else:
            args = getQuestionArgs(request, question_id)
            args['addReply'] = form
            return render(request, 'questions/question.html', args)
        
def topicShow(request, topic_id):
    pass

@login_required
def markAllMessage(request):
    user = request.user.zhihuuser
    mark_as_read(user)
    data = UserNotificationCounter.objects.get(pk=user.id).unread_count
    return HttpResponse(data)

MESSAGE_TIMEOUT= 60 * 5

@login_required    
def getMessageList(request):
    messageType = None
    if request.method == 'GET':
        messageType = request.GET['messageType']
        args = dict()
        zhihuuser = request.user.zhihuuser
        messages = Notification.objects.filter(notify_to_user__id=zhihuuser.id)
        args['messages'] = messages
        
        if messageType == 'thanks':
            if cache.get('thanksmessage') == None:
                print 'thanks messages are generating...'
                response = render(request,'thanksmessage.html',args)
                cache.set('thanksmessage', response, MESSAGE_TIMEOUT)
            else:
                print 'get thanks messages from cache'
            return cache.get('thanksmessage')
        elif messageType == 'user':
            if cache.get('usermessage') == None:
                print 'user messages are generating...'
                response = render(request,'usermessage.html',args) 
                cache.set('usermessage', response, MESSAGE_TIMEOUT) 
            else:
                print 'get user messages from cache'
            return cache.get('usermessage')
        elif messageType == 'common':
            if cache.get('commonmessage') == None:
                print 'common messages are generating...'
                response = render(request,'commonmessage.html',args) 
                cache.set('commonmessage', response, MESSAGE_TIMEOUT)                 
            else:
                print 'get common messages from cache'
            return cache.get('commonmessage')
     

  