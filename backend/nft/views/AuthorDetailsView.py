from rest_framework import generics

from nft.models.NftAuthor import NftAuthor
from nft.serialziers.AuthorSerializer import AuthorDetailsSerializer


class AuthorDetailsView(generics.RetrieveAPIView):
    serializer_class = AuthorDetailsSerializer
    queryset = NftAuthor.objects.all()
