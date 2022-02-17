from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import default_token_generator

from authentication.models import User


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    # password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    # def validate(self, attrs):
    #     if attrs['password'] != attrs['password2']:
    #         raise serializers.ValidationError({"password": "Password fields didn't match."})
    #
    #     return attrs

    def create(self, validated_data):
        # user = User.objects.create(
        #     username=validated_data['username'],
        #     email=validated_data['email'],
        #     first_name=validated_data['first_name'],
        #     last_name=validated_data['last_name']
        # )
        #
        # user.set_password(validated_data['password'])
        # user.save()
        # self._send_activation_email(user)

        # return user
        return User.objects.create(**validated_data)
    # def _send_activation_email(self, user: User) -> None:
    #     message = render_to_string('acc_active_email.html', {
    #         'user': user,
    #         'domain': 'pnft.com',
    #         'uid': urlsafe_base64_encode(force_bytes(user.pk)).encode(),
    #         'token': account_activation_token.make_token(user),
    #     })
    #
    #     mail_subject = 'Activate your PNFT account.'
    #     to_email = user.email
    #     email = EmailMessage(mail_subject, message, to=[to_email])
    #     email.send()

