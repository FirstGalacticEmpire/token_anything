from datetime import datetime, timezone

from django.contrib import auth
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed

from authentication.models import User


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(write_only=True,
                                     required=True,
                                     min_length=6,
                                     max_length=68,
                                     style={'input_type': 'password',
                                            'placeholder': 'Password'})
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)

    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])

        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }

    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'tokens']
        read_only_fields = ['tokens']

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        user = auth.authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        if not user.is_verified:
            raise AuthenticationFailed('Email is not verified')
        user.last_login = datetime.now(tz=timezone.utc)
        user.save()
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }
