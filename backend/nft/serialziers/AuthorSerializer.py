from rest_framework import serializers

from nft.models.NftAuthor import NftAuthor


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = NftAuthor
        fields = ['first_name', 'last_name', 'image']

