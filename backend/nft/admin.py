from django.contrib import admin

# Register your models here.
from nft.models.NftAuthor import NftAuthor
from nft.models.NftModel import NftModel


class NftAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']


admin.site.register(NftModel, NftAdmin)


class AuthorAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'country']


admin.site.register(NftAuthor, AuthorAdmin)
