from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class IndexView(APIView):
    permission_classes = (IsAuthenticated,)
    
    def get(self,request):
        context = {'mensaje':'Bienvenido a mi api'}
        return Response(context)
    