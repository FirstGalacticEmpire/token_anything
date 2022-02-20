from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from authentication.models import User
from authentication.serializers.ChangePasswordSerializer import ChangePasswordSerializer


class ChangePasswordView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer
