from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from auth.views.ActivateAccountView import ActivateAccountView
from auth.views.ChangePasswordView import ChangePasswordView
from auth.views.LoginView import LoginView
from auth.views.LogoutAllView import LogoutAllView
from auth.views.LogoutView import LogoutView
from auth.views.RegisterView import RegisterView
from auth.views.UpdateProfileView import UpdateProfileView

urlpatterns = [
    path('login/', LoginView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
    path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
         ActivateAccountView.as_view(), name='activate'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('logout_all/', LogoutAllView.as_view(), name='auth_logout_all'),
]
