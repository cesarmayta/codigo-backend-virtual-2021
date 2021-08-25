from rest_framework import serializers

from .models import Categoria,Plato,Mesa

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ''
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['categoria_id'] = instance.pk
        representation['categoria_nom'] = instance.nombre
        
        return representation

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = ''
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['mesa_id'] = instance.pk
        representation['mesa_nro'] = instance.numero
        representation['mesa_cap'] = instance.capacidad
        
        return representation
