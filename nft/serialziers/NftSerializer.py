from rest_framework import serializers

from nft.models.NftModel import NftModel


class NftSerializer(serializers.ModelSerializer):

    class Meta:
        model = NftModel
        fields = ['name']