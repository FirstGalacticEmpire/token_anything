from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from authentication.views.ActivateAccountView import ActivateAccountView
from authentication.views.ChangePasswordView import ChangePasswordView
from authentication.views.GoogleAuthView import GoogleAuthView
from authentication.views.LoginView import LoginView
from authentication.views.LogoutView import LogoutView
from authentication.views.RegisterView import RegisterView
from authentication.views.UpdateProfileView import UpdateProfileView

urlpatterns = [
    path('login/', LoginView.as_view(), name='User_login',),
    path('login/refresh/', TokenRefreshView.as_view(), name='User_token_refresh'),
    path('register/', RegisterView.as_view(), name='User_register'),
    path('change_password/', ChangePasswordView.as_view(), name='User_change_password'),

    path('update_profile/', UpdateProfileView.as_view(), name='User_update_profile'),
    path('activate/', ActivateAccountView.as_view(), name='activate'),
    path('logout/', LogoutView.as_view(), name='User_logout'),
    path('google/', GoogleAuthView.as_view()),
]
