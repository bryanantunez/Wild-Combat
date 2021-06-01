from typing import Pattern
from django.urls import path
from .views import home

urlpatterns =  [
    path('',home,name='home'),
]