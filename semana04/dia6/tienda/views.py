from django.shortcuts import render,redirect
from django.conf import settings

from .models import Producto,Cliente,Pedido,PedidoDetalle
from django.contrib.auth.models import User

#IMPORTANDO METODOS PARA AUTENTICACIÓN DE USUARIOS
from django.contrib.auth import authenticate,login,logout

from tienda.carrito import Cart
from tienda.forms import ClienteForm,UsuarioForm

# Create your views here.
def index(request):
    lista_productos = Producto.objects.all()
    print(settings.MEDIA_URL)
    context = {'lstProductos': lista_productos,'directorio_img':settings.MEDIA_URL}
    return render(request,'index.html',context)

def registro(request):
    frmCliente = ClienteForm()
    
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        frmNuevoCliente = ClienteForm(request.POST)
        # check whether it's valid:
        if frmNuevoCliente.is_valid():
            data = frmNuevoCliente.cleaned_data
            dataUsuario = data['usuario']
            dataPassword = data['clave']
            #creamos usuarios
            nuevoUsuario = User.objects.create_user(username=dataUsuario,password=dataPassword)
            
            nuevoUsuario.first_name = data['nombres']
            nuevoUsuario.last_name = data['apellidos']
            nuevoUsuario.email = data['email']
            nuevoUsuario.save()
            
            nuevoCliente = Cliente(usuario=nuevoUsuario)
            nuevoCliente.telefono = data['telefono']
            nuevoCliente.direccion = data['direccion']
            nuevoCliente.doc_ide = data['doc_ide']
            nuevoCliente.save()
            
            return render(request,'graciasRegistro.html')
            
    context = {
        'frmCliente':frmCliente
    }
    return render(request,'registroCliente.html',context)

def loginUsuario(request):
    frmUsuario = UsuarioForm()
    
    if request.method == 'POST':
        frmLogin = UsuarioForm(request.POST)
        
        if frmLogin.is_valid():
            data = frmLogin.cleaned_data
            dataUsuario = data['usuario']
            dataPassword = data['clave']
            
            loginUsuario = authenticate(request,username=dataUsuario,password=dataPassword)
            if loginUsuario is not None:
                print("ok")
                login(request,loginUsuario)
                return render(request,'cuenta.html')
            else:
                print("error")
                context = {
                    'form':frmUsuario,
                    'error':'datos erroneos'
                }
                return render(request,'login.html',context)
            
    
    context = {
        'form':frmUsuario
    }
    return render(request,'login.html',context)

def producto(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id) 
    #equivalente a : select * from producto where id = producto_id
    context = {
        "producto":objProducto
    }
    return render(request,'producto.html',context)

def agregarCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.add(objProducto,1)
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def eliminarProductoCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.remove(objProducto)
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def limpiarCarrito(request):
    CarritoProducto = Cart(request)
    CarritoProducto.clear()
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def carrito(request):
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def pedido(request):
    #print(request.user.id)
    #print(request.session.get("cart"))
    
    userPedido = User.objects.get(id=request.user.id)
    clientePedido = Cliente.objects.get(usuario=userPedido)
    nuevoPedido = Pedido()
    nuevoPedido.cliente = clientePedido
    nuevoPedido.total = 0
    nuevoPedido.save()
    
    pedidoCart = request.session.get("cart")
    print(pedidoCart)
    totalPedido = 0
    for key,value in pedidoCart.items():
        detalle = PedidoDetalle()
        detalle.pedido = nuevoPedido
        detalleProducto = Producto.objects.get(id=value["producto_id"])
        detalle.producto = detalleProducto
        detalle.cantidad = int(value["cantidad"])
        detalle.subtotal = float(value["total"])
        detalle.save()
        totalPedido += float(value["total"])
    
    nuevoPedido.total = totalPedido
    nuevoPedido.save()
        
    return render(request,'pedido.html')