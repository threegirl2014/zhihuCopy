from django.shortcuts import render, get_object_or_404
from .models import Question, Reply, Comment
# Create your views here.

def questionShow(request,question_id):
    q = get_object_or_404(Question,pk=id)
    replies = Reply.objects.filter(question__id=question_id)
    args = dict()
    args['q'] = q
    args['replies'] = replies
    return render(request, 'questions/question.html', args)