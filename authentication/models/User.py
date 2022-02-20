from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken

from authentication.models.UserManager import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255, )  # blank=False, null=False) #TODO zmienic na rewuired itd
    last_name = models.CharField(max_length=255, )  # blank=False, null=False)
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255,unique=True, blank=True, null=True)
    is_active = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    # superuser

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']  # USERNAME_FIELD and password are required by default

    objects = UserManager()

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'

    def __str__(self):
        return f"{self.first_name} {self.last_name}; {self.email}"

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self):
        return self.email

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
