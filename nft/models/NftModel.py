from django.db import models

import datetime

from nft.models.Author import Author

YEAR_CHOICES = [(r, r) for r in range(1984, datetime.date.today().year + 1)]


class NftModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    # author = models.ForeignKey(Author, on_delete=models.CASCADE)
    # year_of_production = models.IntegerField(choices=YEAR_CHOICES, default=None)
    # price = models.DecimalField(max_digits=6, decimal_places=2)
    # description = models.TextField()
    # image = models.ImageField(upload_to='images/')
    # def _meta(self):
    #     name = models.CharField(max_length=255, null=False, blank=False)

    class Meta:

        # verbose_name = "Nft"
        # verbose_name_plural = verbose_name
        # ordering = ('name',)
        db_table = 'nft'

