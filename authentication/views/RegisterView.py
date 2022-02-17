from datetime import datetime, timezone

from rest_framework import generics, status
from rest_framework.response import Response

from authentication.models import User
from authentication.serializers.RegisterSerializer import RegisterSerializer
from authentication.utils import Util


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request) -> Response:
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])
        data = Util.prepare_message(user, request)
        Util.send_email(data)
        return Response(user_data, status=status.HTTP_201_CREATED)
