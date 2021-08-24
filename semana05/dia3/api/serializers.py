#seralizers para api
from rest_framework import serializers

from django.contrib.auth import authenticate

from rest_framework.authtoken.models import Token


class LoginSerializer(serializers.Serializer):
    usuario = serializers.CharField()
    password = serializers.CharField(min_length=8)
    
    def validate(self,data):
        #revisar datos de login
        user = authenticate(username=data['usuario'],password=data['password'])
        if not user:
            raise serializers.ValidationError('Datos no correctos')
        self.context['user'] = user
        return data
    
    def create(self,data):
        token,created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'],token.key