from rest_framework import serializers

from nft.models.NftAuthor import NftAuthor


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = NftAuthor
        fields = ['first_name', 'last_name', 'image']


class AuthorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NftAuthor
        fields = '__all__'

        def get_img_url(self, obj):
            return self.context['request'].build_absolute_uri(obj.image.url)
