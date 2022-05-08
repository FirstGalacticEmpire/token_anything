from django.db import models

import datetime
from django.utils.translation import gettext_lazy as _

from nft.models.NftAuthor import NftAuthor

YEAR_CHOICES = [(r, r) for r in range(1984, datetime.date.today().year + 1)]


class NftModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(NftAuthor, on_delete=models.CASCADE, blank=True, default=None)
    year_of_production = models.IntegerField(choices=YEAR_CHOICES, default=None)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=200)
    description = models.TextField(blank=True)
    image = models.ImageField(_("Image"), upload_to='nft_images/', blank=True, default="nft_images/porto_4.jpg")

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'nft'
