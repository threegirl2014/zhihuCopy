from django.shortcuts import render, get_object_or_404
from .models import Question, Reply, Comment
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponse
# Create your views here.

from zhihuuser.models import ZhihuUser
from questions.models import UpDownVote

@login_required
def questionShow(request,question_id):
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
    user = request.user
    args['user'] = user
    zhihuuser = user.zhihuuser
    args['zhihuuser'] = zhihuuser
    args['topics'] = q.topics.all()
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
#                     reply.down_vote = reply.down_vote - 1
#                     reply.up_vote = reply.up_vote + 1
                    updownvote.opinions = 'U'
                    updownvote.save()                  
                else:
                    updownvote.delete()
#                     reply.up_vote = reply.up_vote - 1                            
            else:
                newVote = UpDownVote(reply=reply, voteman=user, opinions='U')
                newVote.save()
#                 reply.up_vote = reply.up_vote + 1
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
#                     reply.down_vote = reply.down_vote + 1
#                     reply.up_vote = reply.up_vote - 1
                    updownvote.opinions = 'D'
                    updownvote.save()
                else:
                    updownvote.delete()
#                     reply.down_vote = reply.down_vote - 1
            else:
                newVote = UpDownVote(reply=reply, voteman=user, opinions='D')
                newVote.save()
#                 reply.down_vote = reply.down_vote + 1
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