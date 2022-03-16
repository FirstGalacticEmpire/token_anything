from django.db import models
from django.utils import timezone

from nft.models.NftAuthor import NftAuthor
from ..utils import HTTP_STATUS_CODES, JobState


class RequestModel(models.Model):
    name = models.CharField(max_length=255, unique=True, null=False)

    response = models.SmallIntegerField(choices=HTTP_STATUS_CODES, null=True, blank=True)
    method = models.CharField(default='GET', max_length=7)
    time = models.DateTimeField(default=timezone.now, )
    status = models.CharField(null=False, default=JobState.CREATE, max_length=20)
    info = models.CharField(max_length=1000, null=False, blank=True)

    user = models.ForeignKey(NftAuthor, on_delete=models.CASCADE, null=False, default=None)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'request'
