from rest_framework import serializers
from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'blood_group', 'genotype')


class CustomLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()