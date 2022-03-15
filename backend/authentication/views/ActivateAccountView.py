from rest_framework import views, status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import jwt
from rest_framework.response import Response

from authentication.models import User
from authentication.serializers.ActivateAccountSerializer import ActivateAccountSerializer


class ActivateAccountView(views.APIView):
    serializer_class = ActivateAccountSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING)

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, options={"verify_signature": False})
            user: User = User.objects.get(id=payload['user_id'])
            if not user.is_active:
                user.is_active = True
                user.is_verified = True
                user.save()
            return Response({'email': 'Successfully activated'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return Response({'error': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
