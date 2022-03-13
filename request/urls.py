from django.urls import path

from request.views.RequestDeleteView import RequestDeleteView
from request.views.RequestView import RequestView

urlpatterns = [
    path('details/<int:pk>', RequestView.as_view(), name='Request_details'),
    path('delete/<int:pk>', RequestDeleteView.as_view(), name='Request_delete')
    # path('list', NftListView.as_view(),  name='Nft_list'),
    # path('details/<int:pk>', NftDetailsView.as_view(), name='Nft_details')
]