from rest_framework import serializers

from .models import Categoria,Plato,Mesa

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = '__all__'
        
class PlatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plato
        fields = '__all__'
    
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['plato_img'] = 'http://localhost:8000' + instance.plato_img.url
        return representation
        
class CategoriaPlatosSerializer(serializers.ModelSerializer):
    Platos = PlatoSerializer(many=True,read_only=True)
    class Meta:
        model = Categoria
        fields = ['categoria_id','categoria_nom','Platos']
