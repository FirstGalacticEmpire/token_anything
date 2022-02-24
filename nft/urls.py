from django.urls import path

from nft.views.NftListView import NftListView

urlpatterns = [
    path('list', NftListView.as_view(),  name='Nft_list')
]
