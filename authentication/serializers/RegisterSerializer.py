from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from authentication.models import User


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
        return User.objects.create(**validated_data)
