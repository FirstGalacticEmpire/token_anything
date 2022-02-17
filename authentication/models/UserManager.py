from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self, username, email, first_name, last_name, password=None):
        if username is None:
            raise TypeError('Users should have a username')
        if email is None:
            raise TypeError('Users should have a Email')

        user = self.model(username=username,
                          first_name=first_name,
                          last_name=last_name,
                          email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, first_name, last_name, password=None, **kwargs):
        if password is None:
            raise TypeError('Password should not be none')
        user = self.create_user(username, email, first_name, last_name, password)
        user.is_superuser = True
        user.admin = True
        user.is_active = True
        user.is_staff = True
        user.is_verified = True
        user.save()
        return user
