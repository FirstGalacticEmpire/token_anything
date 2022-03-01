from rest_framework import serializers

from nft.models.NftModel import NftModel
from nft.serialziers.AuthorSerializer import AuthorSerializer


class NftSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(required=True)

    class Meta:
        model = NftModel
        fields = ['name', 'price', 'description', 'image', 'year_of_production',
                  'author']
