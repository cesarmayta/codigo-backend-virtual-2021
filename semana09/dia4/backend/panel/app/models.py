#from django.db import models
from django.db.models.deletion import CASCADE
from djongo import models
from django.db.models import DecimalField,ForeignKey
from cloudinary.models import CloudinaryField

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    def __str__(self):
        return self.nombre
    
        
class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    precio = DecimalField(max_digits=9,decimal_places=2)
    stock = models.IntegerField(default=0)
    imagen = CloudinaryField('image',default='')
    categoria = ForeignKey(Categoria,on_delete=CASCADE)
    
    def __str__(self):
        return self.nombre
    
class Cliente(models.Model):
    _id = models.ObjectIdField()
    nombre = models.CharField(max_length=200,default='')
    email = models.CharField(max_length=100,default='')
    foto = models.CharField(max_length=200,default='')
    
    def __str__(self):
        return self.nombre
    