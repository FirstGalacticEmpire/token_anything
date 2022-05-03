from rest_framework import generics
from request.models.RequestModel import RequestModel

from request.serializers.CancelRequestSerializer import CancelRequestSerializer


class RequestCancelView(generics.UpdateAPIView):
    serializer_class = CancelRequestSerializer
    queryset = RequestModel.objects.all()
