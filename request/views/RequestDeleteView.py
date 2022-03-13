from rest_framework import generics
from request.models.RequestModel import RequestModel

from request.serializers.DeleteRequestSerializer import DeleteRequestSerializer


class RequestDeleteView(generics.UpdateAPIView):
    serializer_class = DeleteRequestSerializer
    queryset = RequestModel.objects.all()
