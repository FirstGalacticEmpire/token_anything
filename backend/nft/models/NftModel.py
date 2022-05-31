from django.db import models

import datetime
from django.utils.translation import gettext_lazy as _

from authentication.models import User
from nft.models.NftAuthor import NftAuthor

YEAR_CHOICES = [(r, r) for r in range(1984, datetime.date.today().year + 1)]


class NftModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(NftAuthor, on_delete=models.CASCADE, null=True, default=None)
    year_of_production = models.IntegerField(choices=YEAR_CHOICES, default=None)
    standard = models.CharField(max_length=255, null=True, blank=False)
    last_seen_price = models.DecimalField(max_digits=6, decimal_places=2, default=200)
    price = models.DecimalField(max_digits=25, decimal_places=15, default=200)
    description = models.TextField(blank=True)
    image = models.ImageField(_("Image"), upload_to='nft_images/', blank=True, default="nft_images/porto_4.jpg")
    transaction_address = models.CharField(max_length=255, default=None,null=True)
    wallet_address = models.CharField(max_length=255, default=None, null=True)
    contract_address = models.CharField(max_length=255, default=None, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'nft'
