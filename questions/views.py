from django.shortcuts import render, get_object_or_404
from .models import Question, Reply, Comment
# Create your views here.

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
    args['zhihuuser'] = user.zhihuuser
    args['topics'] = q.topics.all()
    return render(request, 'questions/question0.html', args)