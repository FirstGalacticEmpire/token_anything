from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from authentication.models import User
from authentication.models.UserWallet import UserWallet
from authentication.serializers.UserWalletSerializer import UserWalletSerializer


class WalletView(generics.RetrieveAPIView):
    serializer_class = UserWalletSerializer
    queryset = UserWallet.objects.all()
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        db_user = User.objects.all().get(pk=self.request.user.id)
        self.check_object_permissions(self.request, db_user)
        return self.queryset.get(pk=db_user.wallet_id)
