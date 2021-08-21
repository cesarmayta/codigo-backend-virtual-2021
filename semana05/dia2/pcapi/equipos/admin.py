from django.contrib import admin

# Register your models here.
from .models import Empleado,Equipo

admin.site.register(Empleado)
admin.site.register(Equipo)