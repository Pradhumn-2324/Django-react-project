from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import authenticate,get_user_model


UserModel =get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'],username=clean_data['username'],is_staff=clean_data['is_staff'],date_joined=clean_data['date_joined'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj
	


class UserLoginSerializer(serializers.Serializer):
	username = serializers.CharField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['username'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user
	

# class UserSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = UserModel
# 		fields = ('email', 'username')