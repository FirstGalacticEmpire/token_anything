from django.urls import path

from nft.views.DetailsView import DetailsView

urlpatterns = [
    path('details/', DetailsView.as_view({'get': 'list'}), name='Nft_details'),
    # path('<slug:id>/', DetailsView.as_view(), name='Nft-details'),

]