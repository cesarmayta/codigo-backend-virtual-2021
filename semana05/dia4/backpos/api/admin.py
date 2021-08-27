from django.contrib import admin

# Register your models here.
from .models import Categoria,Plato,Mesa,Pedido,PedidoPlatos

admin.site.register(Categoria)
admin.site.register(Mesa)
admin.site.register(Plato)
admin.site.register(Pedido)
admin.site.register(PedidoPlatos)
