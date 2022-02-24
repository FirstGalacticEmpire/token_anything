from rest_framework import serializers
from nft.models import NftModel


class NftSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)

    # author = serializers.ForegnKey
    # year_of_production = models.
    # price = serializers.DecimalField(max_digits=6, decimal_places=2)
    # image = serializers.ImageField()

    class Meta:
        model = NftModel
        fields = ('name')  # , 'author', 'year_of_production',
        # 'price', 'description', 'image')
    #
    # def create(self, validated_data: dict):
    #     return None
