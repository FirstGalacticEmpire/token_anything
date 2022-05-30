from rest_framework import serializers

from nft.models.NftModel import NftModel
from nft.serialziers.AuthorSerializer import AuthorSerializer


class NftListSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(required=True)

    class Meta:
        model = NftModel
        fields = ['id', 'name', 'price', 'image', 'year_of_production',
                  'author', 'standard', 'last_seen_price']
