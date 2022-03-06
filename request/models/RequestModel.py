from django.db import models
from django.utils import timezone

from nft.models.NftAuthor import NftAuthor
from ..utils import HTTP_STATUS_CODES


class RequestModel(models.Model):

    name = models.CharField(max_length=255, unique=True, null=False)

    response = models.SmallIntegerField(choices=HTTP_STATUS_CODES, default=200)
    method = models.CharField(default='GET', max_length=7)
    time = models.DateTimeField(default=timezone.now, )  # db_index=True

    user = models.ForeignKey(NftAuthor, on_delete=models.CASCADE, blank=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'request'
