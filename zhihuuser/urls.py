from django.conf.urls import url,include
from . import views

urlpatterns = [
               url(r'^$', views.people, name='people'),
               url(r'^asks/$', views.show_asks, name='asks'),
               url(r'^answers/$', views.show_answers, name='answers'),
               url(r'^posts/$', views.show_posts, name='posts'),
               url(r'^collections/$', views.show_collections, name='collections'),
               url(r'^logs/$', views.show_logs, name='logs'),
               url(r'^followers/$', views.show_followers, name='followers'),
               url(r'^followees/$', views.show_followees, name='followees'),
               ]