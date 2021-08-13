from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    #return HttpResponse("<h2>Bienvenido a mi app de encuestas!!!</h2>")
    context = {
        'titulo':'Encuesta Alumnos'
    }
    return render(request,'index.html',context)

def detalle(request,pregunta_id):
    return HttpResponse("Estas viendo la pregunta %s." % pregunta_id)

def suma(request,a,b):
    suma = a + b
    mensaje = "la suma de " + str(a) + " + " +  str(b) + " es " + str(suma)
    return HttpResponse(mensaje)

def enviar(request):
    context = {
        'titulo' : 'Respuesta',
        'nombre' : request.POST['nombre'],
        'email' : request.POST['email'],
        'perfil' : request.POST['perfil'],
        'idiomas' : request.POST.getlist('idiomas'),
        'github' : request.POST['github']
    }
    
    return render(request,'respuesta.html',context)