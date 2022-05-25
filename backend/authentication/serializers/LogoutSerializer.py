from rest_framework import serializers
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import RefreshToken


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_message = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return {'message': 'User logout'}

    def save(self, **kwargs):

        try:
            RefreshToken(self.token).blacklist()
        except TokenError as e:
            self.fail(e)
