from django.contrib.auth.models import User
from rest_framework import serializers
from slambook.api.models import AboutUser


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        # extra_kwargs = {'password' : {'write-only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserAboutSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AboutUser
        fields = ('id', 'username', 'about')
