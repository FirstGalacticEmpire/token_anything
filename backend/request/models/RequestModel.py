from django.core.validators import MinLengthValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from authentication.models import User
from ..utils import JobState


class RequestType(models.IntegerChoices):
    FOR_SALE = 1
    PAWN = 2


charfield_errors = {
    '1': 'For sale',
    '2': 'Pawn'
}


class RequestModel(models.Model):
    name = models.CharField(max_length=255, unique=True, null=False)
    created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(null=False, default=JobState.NEW, max_length=20)
    paid = models.BooleanField(default=False)
    info = models.CharField(max_length=1000, null=False, blank=True, validators=[MinLengthValidator(20)])
    price = models.FloatField(null=False, blank=False)
    request_type = models.IntegerField(choices=RequestType.choices, blank=False, null=False,
                                       error_messages=charfield_errors)
    image = models.ImageField(_("Image"), upload_to='nft_images/', blank=True, default="images/nft_images/porto_4.jpg")
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, default=None)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'request'
