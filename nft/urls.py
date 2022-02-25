from django.urls import path

from nft.views.NftDetailsView import NftDetailsView
from nft.views.NftListView import NftListView

urlpatterns = [
    path('list', NftListView.as_view(),  name='Nft_list'),
    path('details/<int:pk>', NftDetailsView.as_view(), name='Nft_details')
]
