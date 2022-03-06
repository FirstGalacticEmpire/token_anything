from rest_framework import serializers

from request.models.RequestModel import RequestModel


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestModel
        fields = ['name', 'response', 'method', 'time', 'user']
