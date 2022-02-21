from django.db import models
import datetime

from nft.models.Author import Author

YEAR_CHOICES = [(r, r) for r in range(1984, datetime.date.today().year + 1)]


class NftModel(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    year_of_production = models.IntegerField(choices=YEAR_CHOICES, default=None)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
