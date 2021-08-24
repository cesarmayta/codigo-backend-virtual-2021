from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import LoginSerializer

# Create your views here.
class IndexView(APIView):
    #verifica si el usuario esta autenticado
    permission_classes = (IsAuthenticated,)
    
    def get(self,request):
        context = {'mensaje':'Bienvenido a mi api'}
        return Response(context)
    
class LoginApiView(APIView):
    
    def post(self,request):
        print(request.data)
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user,token = serializer.save()
        print(user)
        print(token)
        context = {
            "token":token
        }
        
        return Response(context)
    