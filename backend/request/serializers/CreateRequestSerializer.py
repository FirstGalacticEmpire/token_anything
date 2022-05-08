from rest_framework import serializers
from rest_framework.serializers import ValidationError

from rest_framework.exceptions import AuthenticationFailed

from request.models.RequestModel import RequestModel


class CreateRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestModel
        fields = ['name', 'info', 'image', 'price', 'request_type']

    def validate(self, attrs):
        try:
            request_type = attrs['request_type']
        except KeyError as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        if request_type not in [1,2]:
            raise ValidationError({"ValidationError": "Request type must be an int: FOR_SALE-1; PAWN-2"})

        return attrs

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        request = RequestModel.objects.create(**validated_data)
        return request
