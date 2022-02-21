from django.db import models

COUNTRIES = {'poland': 'Poland',
             'england': 'England',
             'germany': 'Germany',
             'undetermined': 'Undetermined'}  # etc


class Author(models.Model):
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    country = models.CharField(max_length=255, blank=False,
                               null=False, default=COUNTRIES.get('undetermined'))
    ig_url = models.URLField(max_length=200, blank=False, null=False)
    twitter__url = models.URLField(max_length=200)
    facebook_url = models.URLField(max_length=200)
    external_url = models.URLField(max_length=200)

    class Meta:
        db_table = 'nft_author'

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def get_urls(self):
        return {'Instagram': self.ig_url,
                'Facebook': self.facebook_url,
                'Twitter': self.twitter__url,
                'External link': self.external_url}
