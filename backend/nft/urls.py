from django.urls import path

from nft.views.AuthorDetailsView import AuthorDetailsView
from nft.views.NftDetailsView import NftDetailsView
from nft.views.NftListView import NftListView

urlpatterns = [
    path('list', NftListView.as_view(),  name='Nft_list'),
    path('details/<int:pk>', NftDetailsView.as_view(), name='Nft_details'),
    path('author/<int:pk>', AuthorDetailsView.as_view(), name='Nft_author_details')
]
