from rest_framework.views import APIView
from rest_framework.response import Response

#importar modelos
from .models import Categoria,Mesa,Plato
#importar serializers
from .serializers import CategoriaSerializer,MesaSerializer

class IndexView(APIView):
    
    def get(self,request):
        context = {"ok":True,"message":"El servidor está activo!"}
        return Response(context)

class CategoriaApiView(APIView):
    
    def get(self,request):
        dataCategoria = Categoria.objects.all()
        serializer = CategoriaSerializer(dataCategoria,many=True)
        return Response(serializer.data)

class MesaApiView(APIView):
    
    def get(self,request):
        dataMesa = Mesa.objects.all()
        serializers = MesaSerializer(dataMesa,many=True)
        return Response(serializers.data)

