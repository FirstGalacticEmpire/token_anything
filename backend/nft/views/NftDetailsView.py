from rest_framework import generics

from nft.models.NftModel import NftModel
from nft.serialziers.NftSerializer import NftSerializer


class NftDetailsView(generics.RetrieveAPIView):
    serializer_class = NftSerializer
    queryset = NftModel.objects.all()
