from datetime import datetime, timezone

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView


class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        user.last_login = datetime.now(tz=timezone.utc)
        user.save()
        return RefreshToken.for_user(user)


class LoginView(TokenObtainPairView):
    serializer_class = TokenSerializer
