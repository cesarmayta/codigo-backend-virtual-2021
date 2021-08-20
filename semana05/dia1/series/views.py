from rest_framework import viewsets
from .serializers import SerieSerializer,CategoriaSerializer
from .models import Serie,Categoria

# Create your views here.
class SerieViewSet(viewsets.ModelViewSet):
    queryset = Serie.objects.all()
    serializer_class = SerieSerializer
    
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
