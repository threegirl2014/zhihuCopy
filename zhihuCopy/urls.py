"""zhihuCopy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings
from zhihuuser import views as zhihuuserViews
from questions import views as questionsViews
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    
    url(r'^$', zhihuuserViews.home, name='home'),
    
    url(r'^people/(?P<name>[-\d\w]+)/', include('zhihuuser.urls')),
    
    url(r'^register/email/$', zhihuuserViews.register, name='register'),
    url(r'^login/email/$', zhihuuserViews.weblogin, name='login'),
    url('^logout/$', zhihuuserViews.weblogout, name='logout'),
    
    url(r'^question/(?P<question_id>\d+)/$', questionsViews.questionShow, name='question'),
    url(r'^topic/(?P<topic_id>\d+)/$', questionsViews.topicShow, name='topic'),
    url(r'^reply/upvote/$', questionsViews.upVoteAnswer, name='upVote'),
    url(r'^reply/downvote/$', questionsViews.downVoteAnswer, name='downVote'),
    url(r'^question/follow/$', questionsViews.followQuestion, name='questionFollow'),
    
    url(r'^add/question/$', questionsViews.addQuestion, name='addQuestion'),
    url(r'^topic_suggest/$', questionsViews.topicSuggestion, name='topicSuggest'),
    
    url(r'^question/(?P<question_id>\d+)/add/reply/$', questionsViews.addReply, name='addReply'),
    
    url(r'^mark/$', questionsViews.markAllMessage, name='mark'),
    url(r'^messagelist/$', questionsViews.getMessageList, name='messageList'),
    
    url(r'^follow/$', zhihuuserViews.modify_follow, name='modifyFollow'),
    
    url(r'^buttom/$', zhihuuserViews.buttom, name='buttom'),
    url(r'^top/$', zhihuuserViews.top, name='top'),
    url(r'^interval/$', zhihuuserViews.interval, name='interval'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
