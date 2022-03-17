from rest_framework import serializers

from authentication.models import User


class ActivateAccountSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555, required=True)

    class Meta:
        model = User
        fields = ['token']
