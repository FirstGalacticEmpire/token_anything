from rest_framework import generics

from nft.models.NftModel import NftModel
from nft.serialziers.NftListSerializer import NftListSerializer
from nft.serialziers.NftSerializer import NftSerializer


class NftDetailsView(generics.RetrieveAPIView):
    serializer_class = NftListSerializer
    queryset = NftModel.objects.all()
