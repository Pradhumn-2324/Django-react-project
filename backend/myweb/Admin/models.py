from django.db import models
from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from django.contrib.auth.base_user import BaseUserManager
# Create your models here.


UserModel = get_user_model()

class AppUserManager(BaseUserManager):
	def create_user(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		email = self.normalize_email(email)
		user = self.model(email=email)
		user.set_password(password)
		user.save()
		return user
	def create_superuser(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(email, password)
		user.is_superuser = True
		user.save()
		return user


# class Myuser(models.Model):
#     username = models.CharField(max_length=20)
#     password = models.CharField(max_length=20,default="1234")

#     def __str__(self) -> str:
#         return f"Post: {self.username}"