from rest_framework import generics

from request.models.RequestModel import RequestModel
from request.serializers.CreateRequestSerializer import CreateRequestSerializer


class CreateRequestView(generics.CreateAPIView):
    queryset = RequestModel.objects.all()
    serializer_class = CreateRequestSerializer
