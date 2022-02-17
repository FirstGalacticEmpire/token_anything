from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from authentication.views.ActivateAccountView import ActivateAccountView
from authentication.views.ChangePasswordView import ChangePasswordView
from authentication.views.LoginView import LoginView
from authentication.views.LogoutAllView import LogoutAllView
from authentication.views.LogoutView import LogoutView
from authentication.views.RegisterView import RegisterView
from authentication.views.UpdateProfileView import UpdateProfileView

urlpatterns = [
    path('login/', LoginView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
    path('activate/', ActivateAccountView.as_view(), name='activate'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('logout_all/', LogoutAllView.as_view(), name='auth_logout_all'),
]
