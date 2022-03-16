from django.urls import path

from request.views.CreateRequestView import CreateRequestView
from request.views.RequestCancelView import RequestCancelView
from request.views.RequestView import RequestView

urlpatterns = [
    path('details/<int:pk>', RequestView.as_view(), name='Request_details'),
    path('delete/<int:pk>', RequestCancelView.as_view(), name='Request_cancel'),
    path('create/', CreateRequestView.as_view(), name='Request_create')
    # path('list', NftListView.as_view(),  name='Nft_list'),
    # path('details/<int:pk>', NftDetailsView.as_view(), name='Nft_details')
]