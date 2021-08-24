from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('login',views.LoginApiView.as_view(),name='login')
]
