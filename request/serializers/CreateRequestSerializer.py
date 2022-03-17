from rest_framework import serializers

from request.models.RequestModel import RequestModel


class CreateRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestModel
        fields = ['name', 'user', 'info']

    def validate_info(self, value):
        if value == 'string':
            raise serializers.ValidationError({"info": "This info is not enough"})

        return value

    def create(self, validated_data):
        request = RequestModel.objects.create(**validated_data)
        return request
