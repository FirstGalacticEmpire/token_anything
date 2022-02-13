from rest_framework import serializers
# from rest_framework.authtoken.admin import User


class ActivateAccountSerializer(serializers.ModelSerializer):
    uidb64 = serializers.CharField(write_only=True, required=True)
    token = serializers.CharField(write_only=True, required=True)

    class Meta:
        # model = User
        fields = ('uidb64', 'token')
