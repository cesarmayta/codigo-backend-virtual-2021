from django.contrib import admin

# Register your models here.
from .models import Categoria,Producto,Cliente

admin.site.register(Categoria)
#admin.site.register(Producto)
@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('pk','nombre','categoria','precio','stock')
    list_display_links = ('pk','nombre')
    list_editable = ('categoria','precio','stock')
    search_fields = ['nombre']
    
admin.site.register(Cliente)