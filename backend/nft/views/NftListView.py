from rest_framework import generics

from nft.serialziers.NftListSerializer import NftListSerializer


class NftListView(generics.ListAPIView):
    serializer_class = NftListSerializer
    model = serializer_class.Meta.model
    paginate_by = 100

    def get_queryset(self):
        queryset = self.model.objects.all()
        return queryset.order_by('-price')
