from rest_framework import serializers



from .models import Categoria,Plato,Mesa,Pedido,PedidoPlatos



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
        representation['plato_img'] = instance.plato_img.url
        return representation
        
class CategoriaPlatosSerializer(serializers.ModelSerializer):
    Platos = PlatoSerializer(many=True,read_only=True)
    class Meta:
        model = Categoria
        fields = ['categoria_id','categoria_nom','Platos']
        
class PedidoPlatosSerializerPOST(serializers.ModelSerializer):
    class Meta:
        model = PedidoPlatos
        fields = ['plato_id','pedidoplato_cant']
            
class PedidoSerializerPOST(serializers.ModelSerializer):
    pedidoplatos = PedidoPlatosSerializerPOST(many=True)
    class Meta:
        model = Pedido
        fields = ['pedido_fech','pedido_nro','pedido_est','usu_id','mesa_id','pedidoplatos']
        
    def create(self, validated_data):
        pedidos_data = validated_data.pop('pedidoplatos')
        pedido = Pedido.objects.create(**validated_data)
        for pedido_data in pedidos_data:
            PedidoPlatos.objects.create(pedido_id=pedido, **pedido_data)
        return pedido

from rest_framework_simplejwt.serializers import TokenObtainSerializer,RefreshToken,api_settings,update_last_login

class TokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['token'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data
    
from django.contrib.auth.models import User

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ''
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['usu_id'] = instance.id
        representation['usu_email'] = instance.email
        representation['usu_nom'] = instance.first_name
        representation['usu_ape'] = instance.last_name
        representation['usu_tipo'] = 'admin'
        
        return representation
    
class PedidoPlatosSerializerGET(serializers.ModelSerializer):
    class Meta:
        model = PedidoPlatos
        fields = ['pedidoplato_id','pedidoplato_cant','plato_id','pedido_id']
        
class PedidoSerializerGET(serializers.ModelSerializer):
    pedidoplatos = PedidoPlatosSerializerGET(many=True,read_only=True)
    class Meta:
        model = Pedido
        fields = ['pedido_id','pedido_fech','pedido_nro','pedido_est','usu_id','mesa_id','pedidoplatos']
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        serializersMesa = MesaSerializer(instance.mesa_id)
        representation['Mesa'] = serializersMesa.data
        serializersUsuario = UsuarioSerializer(instance.usu_id)
        representation['Usuario'] = serializersUsuario.data
        
        return representation
        
