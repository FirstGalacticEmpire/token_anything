from rest_framework import serializers

from nft.models.NftModel import NftModel


class NftListSerializer(serializers.ModelSerializer):

    author_name = serializers.ReadOnlyField(source='author.first_name')
    author_surname = serializers.ReadOnlyField(source='author.last_name')

    class Meta:
        model = NftModel
        fields = ['name', 'price', 'description', 'image',
                  'author_name', 'author_surname']

