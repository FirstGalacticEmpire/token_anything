
from rest_framework import generics, status
from rest_framework.response import Response
from authentication.serializers.LoginSerializer import LoginSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request) -> Response:
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
