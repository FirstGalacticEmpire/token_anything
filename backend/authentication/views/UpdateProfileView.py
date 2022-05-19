from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from authentication.models import User
from authentication.serializers.UpdateUserSerializer import UpdateUserSerializer


class UpdateProfileView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        user = queryset.get(pk=self.request.user.id)
        self.check_object_permissions(self.request, user)
        return user
