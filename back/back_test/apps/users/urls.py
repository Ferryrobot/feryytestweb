
from django.contrib import admin
from django.urls import path,include
from .views import login
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('register/',login.RegisterView.as_view()),
    path('login/',obtain_jwt_token)
]
