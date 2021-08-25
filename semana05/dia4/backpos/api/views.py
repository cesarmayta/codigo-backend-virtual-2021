from rest_framework.views import APIView
from rest_framework.response import Response

#importar modelos
from .models import Categoria,Mesa,Plato
#importar serializers
from .serializers import CategoriaSerializer,MesaSerializer

class Response(Response):

    def __init__(self, data=None, message=None, data_status=None, status=None,
                template_name=None, headers=None,
                exception=False, content_type=None):

        data_content = {
            'ok': True,
            'content': data
        }
        super(Response, self).__init__(
            data=data_content,
            status=status,
            template_name=template_name,
            headers=headers,
            exception=exception,
            content_type=content_type
        )

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

