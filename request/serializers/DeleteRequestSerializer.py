from rest_framework import serializers

from request.models.RequestModel import RequestModel

from ..utils import JobState


class DeleteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestModel
        fields = []

    def update(self, instance, validated_data):
        if instance.status in [JobState.CREATE, JobState.SENT]:
            instance.status = JobState.CANCELED
        instance.save()
        return instance
