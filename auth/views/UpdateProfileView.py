from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from auth.serializers.UpdateUserSerializer import UpdateUserSerializer


class UpdateProfileView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer
