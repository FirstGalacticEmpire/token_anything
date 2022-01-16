import datetime

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user: User):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        user.last_login = datetime.datetime.now()
        user.save()
        return token
