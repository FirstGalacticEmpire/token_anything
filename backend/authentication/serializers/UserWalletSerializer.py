from rest_framework import serializers

from authentication.models.UserWallet import UserWallet


class UserWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWallet
        fields = ['address', 'key', 'private_key']
