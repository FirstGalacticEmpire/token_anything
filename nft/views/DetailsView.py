from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import generics, status, viewsets

from rest_framework import views, status
from nft.models.NftModel import NftModel
from nft.serializers.NftSerializer import NftSerializer
from django.views.generic.detail import DetailView

from django.utils import timezone
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class DetailsView(viewsets.ViewSet):

    queryset = NftModel.objects.all()

    serializer_class = NftSerializer
    # lookup_field = 'name'
    # model = NftModel

    def list(self, request):
        queryset = NftModel.objects.all()
        serializer = NftSerializer(queryset, many=True)
        return Response(serializer.data)
    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     context['now'] = timezone.now()
    #     return context

    # def get_object(self):
    #     return "dupa"
    # token_param_config = openapi.Parameter(
    #     'id', in_=openapi.IN_QUERY, description='ID', type=openapi.TYPE_INTEGER)
    #
    # @swagger_auto_schema(manual_parameters=[token_param_config])
    # def get(self, request, *args, **kwargs) -> Response:
    #     nft = request.GET.get('id')
    #     context = {}
    #     curr_obj = self.get_object()
    #     print(curr_obj)
    #     # Nft = NftModel.objects.get(id=nft)
    #     # print(queryset)
    #     # serializer = serializer_class(data=nft)
    #     return Response('dupa', status=status.HTTP_200_OK)
