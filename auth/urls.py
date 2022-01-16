from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from auth.views.ChangePasswordView import ChangePasswordView
from auth.views.MyObtainTokenPairView import MyObtainTokenPairView
from auth.views.RegisterView import RegisterView

urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password')
]
