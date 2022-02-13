from rest_framework import generics
# from rest_framework.authtoken.admin import User
from rest_framework.permissions import AllowAny

from auth.serializers.ActivateAccountSerializer import ActivateAccountSerializer


class ActivateAccountView(generics.UpdateAPIView):
    # queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ActivateAccountSerializer
