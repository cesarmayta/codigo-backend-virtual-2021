from django.shortcuts import render,redirect

#importar modelos
from .models import Opcion,Pregunta
# Create your views here.
def index(request):
    lista_preguntas = Pregunta.objects.all()
    context = {'lstPreguntas': lista_preguntas}
    return render(request,'index.html',context)

def detalle(request,pregunta_id):
    pregunta = Pregunta.objects.get(id=pregunta_id)
    print(pregunta.id)
    print(pregunta.pregunta_texto)
    for opcion in pregunta.opcion_set.all():
        print(opcion.opcion_texto)
    context = {'pregunta':pregunta}
    return render(request,'detalle.html',context)

def votar(request,pregunta_id):
    pregunta = Pregunta.objects.get(id=pregunta_id)
    context = {'pregunta':pregunta}
    return render(request,'votar.html',context)

def resultado(request,pregunta_id):
    pregunta = Pregunta.objects.get(id=pregunta_id)
    #capturar opcion seleccionada
    opcionSeleccionada = request.POST['opcion']
    opcion = pregunta.opcion_set.get(id=opcionSeleccionada)
    opcion.votos += 1
    opcion.save()
    return redirect('/encuestas/' + str(pregunta.id) + '/')