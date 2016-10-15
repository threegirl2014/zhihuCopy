from django.contrib import admin
from questions.models import Question, Topic, Reply, Comment, \
    UpDownVote, Notification

# Register your models here.
admin.site.register(Topic)
admin.site.register(Question)
admin.site.register(Reply)
admin.site.register(Comment)
admin.site.register(UpDownVote)
admin.site.register(Notification)