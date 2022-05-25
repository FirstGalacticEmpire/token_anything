from django.db import models


class UserWallet(models.Model):
    address = models.CharField(max_length=36)
    key = models.CharField(max_length=255)
    private_key = models.CharField(max_length=255)

    def __str__(self):
        return self.address

    class Meta:
        db_table = 'user_wallet'


