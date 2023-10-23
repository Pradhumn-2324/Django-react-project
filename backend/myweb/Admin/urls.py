from . import views
from django.urls import path

urlpatterns = [
path ('admin_login/', views.UserLogin.as_view(), name='login'),
path ('register/', views.UserRegister.as_view(), name='login'),

]