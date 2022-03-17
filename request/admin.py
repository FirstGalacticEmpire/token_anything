from django.contrib import admin

# Register your models here.
from request.models.RequestModel import RequestModel


class RequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'user', 'time', 'status']


admin.site.register(RequestModel, RequestAdmin)
