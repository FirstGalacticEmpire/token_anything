from rest_framework import serializers

from nft.models.NftModel import NftModel


class NftListSerializer(serializers.ModelSerializer):
    class Meta:
        model = NftModel
        fields = ['name', 'price', 'author']
