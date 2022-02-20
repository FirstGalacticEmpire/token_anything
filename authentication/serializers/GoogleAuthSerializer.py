import os

from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed

from authentication.social_auth.GoogleAuth import GoogleAuth
from authentication.social_auth.utils import register_and_login_social_user


class GoogleAuthSerializer(serializers.Serializer):
    auth_token = serializers.CharField()

    @staticmethod
    def validate_auth_token(auth_token):
        user_data = GoogleAuth.validate(auth_token)
        try:
            user_data['sub']
        except KeyError:
            raise serializers.ValidationError(
                'The token is invalid or expired. Please login again.'
            )

        if user_data['aud'] != os.environ.get('GOOGLE_CLIENT_ID'):
            raise AuthenticationFailed('oops, who are you?')

        email = user_data['email']
        name = user_data['name']
        provider = 'google'

        return register_and_login_social_user(
            provider=provider, email=email, name=name)
