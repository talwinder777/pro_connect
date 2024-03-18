from django.contrib import admin
from .models import ExpertEmail
from .models import ClientEmail

# Register your models here.
admin.site.register(ExpertEmail);
admin.site.register(ClientEmail);
