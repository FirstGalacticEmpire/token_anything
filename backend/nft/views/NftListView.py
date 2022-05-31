from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from nft.serialziers.NftListSerializer import NftListSerializer


class NftListView(generics.ListAPIView):
    serializer_class = NftListSerializer
    # permission_classes = (IsAuthenticated,)
    model = serializer_class.Meta.model
    paginate_by = 100

    def get_queryset(self):
        queryset = self.model.objects.all()
        return queryset.order_by('-price')
