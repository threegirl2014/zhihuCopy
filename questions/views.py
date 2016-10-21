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
from scipy.constants.constants import mega

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
                    #upvote notification to reply author
                    createNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                  
                    #upvote notificaiton from VIP
                    createNotifications(from_user=user, to_user=user.followers.all(), notify_type='UF', question=reply.question, reply=reply)
                else:
                    updownvote.delete()
                    #upvote notification to reply author
                    deleteNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                          
                    #upvote notificaiton from VIP
                    deleteNotifications(from_user=user, to_user=user.followers.all(), notify_type='UF', question=reply.question, reply=reply)
            else:
                newVote = UpDownVote(reply=reply, voteman=user, opinions='U')
                newVote.save()
                #upvote notification to reply author
                createNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)
                #upvote notificaiton from VIP
                createNotifications(from_user=user, to_user=user.followers.all(), notify_type='UF', question=reply.question, reply=reply)
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
                    #upvote notification to reply author
                    deleteNotifications(from_user=user, to_user=reply.author, notify_type='U', question=reply.question, reply=reply)                                              
                    #upvote notificaiton from VIP
                    deleteNotifications(from_user=user, to_user=user.followers.all(), notify_type='UF', question=reply.question, reply=reply)
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
            #interest Notification from VIP
            deleteNotifications(from_user=user, to_user=user.followers.all(), notify_type='IF', question=q)
        else:
            user.questions.add(q)
            q.followers_count = q.followers_count + 1
            print '>>>>>>>>>add: ', q.followers_count
            #interest question Notification from VIP
            createNotifications(from_user=user, to_user=user.followers.all(), notify_type='IF', question=q)
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
            #create question Notification from VIP
            createNotifications(from_user=user, to_user=user.followers.all(), notify_type='CF', question=question)
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
            #create reply Notification from question
            createNotifications(from_user=user, to_user=question.followers.all(), notify_type='RQ', question=question, reply=reply)
            #create reply Notification from VIP
            createNotifications(from_user=user, to_user=user.followers.all(), notify_type='RF', question=question, reply=reply)
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
#     mark_as_read(user)
    data = UserNotificationCounter.objects.get(pk=user.id).unread_count
    return HttpResponse(data)

def clean_thanksmessages(user,raw_messages):
    u_messages = {}
    t_messages = {}
    for item in raw_messages:
        question_id = item.notify_question.id
        question_url = item.notify_question.get_absolute_url()
        question_title = item.notify_question.title
        user_name = item.notify_from_user.fullname
        user_url = item.notify_from_user.get_absolute_url()
        notify_type = item.notify_type
        has_read = item.has_read
        data = (question_url, user_name, user_url, notify_type, has_read,question_title)
        if notify_type == 'U':
            if u_messages.has_key(question_id):          
                u_messages[question_id].append(data)
            else:
                u_messages[question_id] = [data,]
        elif notify_type == 'T':
            if t_messages.has_key(question_id):          
                t_messages[question_id].append(data)
            else:
                t_messages[question_id] = [data,]
    
    def messages_merge(a,b):
        for item in b:
            l = len(b[item])
            message = {'question_id': item,
                       'question_url': b[item][0][0],
                       'notify_type': b[item][0][3],
                       'has_read': b[item][0][4],
                       'title' : b[item][0][5],
                       'users' : []}
            for i in range(0,l):
                message['users'].append( {'user_name':b[item][i][1],
                                          'user_url':b[item][i][2]} )
                if b[item][i][4] == False:
                    message['has_read'] = False
            a.append(message)
    
    messages = []
    messages_merge(messages, u_messages)
    messages_merge(messages, t_messages)
    return messages

def clean_commonMessages(user,raw_messages):
    messages = []
    r_messages = {}
    for item in raw_messages:
        question_id = item.notify_question.id
        question_title = item.notify_question.title
        question_url = item.notify_question.get_absolute_url()
        user_name = item.notify_from_user.fullname
        user_url = item.notify_from_user.get_absolute_url()
        notify_type = item.notify_type
        has_read = item.has_read
        if notify_type == 'CF' or notify_type == 'IF':
            messages.append({'question_id':question_id,'question_url':question_url,
                             'user_name':user_name,'user_url':user_url,
                             'notify_type':notify_type,'has_read':has_read, 'question_title':question_title})
        elif notify_type == 'RF' or notify_type == 'RQ':    
            data = {'question_id':question_id,'question_url':question_url,
                    'user_name':user_name,'user_url':user_url,
                    'notify_type':'R','has_read':has_read, 'question_title':question_title}
            if r_messages.has_key(question_id):
                r_messages[question_id].append( data )
            else:
                r_messages[question_id] = [data,]
   
    def user_merge(users):
        merged = {}
        for user in users:
            merged[user['user_name']] = user['user_url']
        merged_users = []
        for user in merged:
            merged_users.append({'user_name':user,'user_url':merged[user]})
        return merged_users
    
    for question_id in r_messages:       
        data = {'question_id':question_id,'question_url':r_messages[question_id][0]['question_url'],
                'users':[],
                'notify_type':r_messages[question_id][0]['notify_type'],'has_read':r_messages[question_id][0]['has_read'],
                'question_title':r_messages[question_id][0]['question_title']}
        for item in r_messages[question_id]:
            data['users'].append({'user_name':item['user_name'],'user_url':item['user_url']})
        data['users'] = user_merge(data['users'])
        messages.append(data)                
    return messages            

MESSAGE_TIMEOUT= 10

@login_required    
def getMessageList(request):
    messageType = None
    if request.method == 'GET':
        messageType = request.GET['messageType']
        args = dict()
        zhihuuser = request.user.zhihuuser
        notifies = Notification.objects.filter(~Q(notify_from_user__id=zhihuuser.id))\
                                    .filter(notify_to_user__id=zhihuuser.id)
        
        if messageType == 'thanks':
            if cache.get('thanksmessage') == None:
                print 'thanks messages are generating...'
                messages = notifies.filter( Q(notify_type='U') | Q(notify_type='T') )
                args['messages'] = clean_thanksmessages(zhihuuser, messages)
#                 args['messages'] = messages
                response = render(request,'thanksmessage.html',args)
                cache.set('thanksmessage', response, MESSAGE_TIMEOUT)
                mark_as_read(zhihuuser,'thanks')
            else:
                print 'get thanks messages from cache'
            return cache.get('thanksmessage')
        elif messageType == 'user':
            if cache.get('usermessage') == None:
                print 'user messages are generating...'
                messages = notifies.filter( Q(notify_type='F') )
                args['messages'] = messages
                response = render(request,'usermessage.html',args) 
                cache.set('usermessage', response, MESSAGE_TIMEOUT)
                mark_as_read(zhihuuser,'user') 
            else:
                print 'get user messages from cache'
            return cache.get('usermessage')
        elif messageType == 'common':
            if cache.get('commonmessage') == None:
                print 'common messages are generating...'
                messages = notifies.filter( Q(notify_type='RF') | Q(notify_type='RQ') \
                                        | Q(notify_type='CF') | Q(notify_type='IF') )
                args['messages'] = clean_commonMessages(zhihuuser, messages)
#                 args['messages'] = messages
                response = render(request,'commonmessage.html',args) 
                cache.set('commonmessage', response, MESSAGE_TIMEOUT) 
                mark_as_read(zhihuuser,'common')                
            else:
                print 'get common messages from cache'
            return cache.get('commonmessage')
     

  