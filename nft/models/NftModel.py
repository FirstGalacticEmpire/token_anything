from django.db import models

import datetime

from nft.models.NftAuthor import NftAuthor

YEAR_CHOICES = [(r, r) for r in range(1984, datetime.date.today().year + 1)]


class NftModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(NftAuthor, on_delete=models.CASCADE, null=True, blank=True)
    year_of_production = models.IntegerField(choices=YEAR_CHOICES, default=None)
    price = models.DecimalField(max_digits=6, decimal_places=2,default=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/',blank=True)

    def __str__(self):
        return self.name
    