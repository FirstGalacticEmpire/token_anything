from rest_framework import generics
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated

from request.models.RequestModel import RequestModel
from request.serializers.CreateRequestSerializer import CreateRequestSerializer


class CreateRequestView(generics.CreateAPIView):
    queryset = RequestModel.objects.all()
    serializer_class = CreateRequestSerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = (FormParser, MultiPartParser)