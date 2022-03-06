from rest_framework import generics

from request.models.RequestModel import RequestModel
from request.serializers.RequestSerializer import RequestSerializer


class RequestView(generics.RetrieveAPIView):
    serializer_class = RequestSerializer
    queryset = RequestModel.objects.all()
