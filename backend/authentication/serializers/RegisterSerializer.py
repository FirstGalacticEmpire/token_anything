from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from authentication.models import User
from eth_account import Account
import secrets

from authentication.models.UserWallet import UserWallet


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())],
        max_length=255, min_length=3
    )
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True,
                                     required=True,
                                     min_length=6,
                                     max_length=68,
                                     style={'input_type': 'password',
                                            'placeholder': 'Password'})

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def create(self, validated_data: dict):
        wallet: UserWallet = self._create_wallet()
        user = User.objects.create(wallet=wallet, **validated_data)
        return user

    @staticmethod
    def _create_wallet() -> UserWallet:
        private_token = secrets.token_hex(32)
        private_key = "0x" + private_token
        wallet = Account.from_key(private_key)
        wallet_dict = {
            'private_key': private_key,
            'key': str(wallet.key),
            'address': str(wallet.address)
        }
        return UserWallet.objects.create(**wallet_dict)
