from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    
class Plato(models.Model):
    categoria = models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    nombre = models.CharField(max_length=200)
    imagen = models.ImageField(upload_to='platos',blank=True,null=True)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    
    def __str__(self):
        return self.nombre
    
class Mesa(models.Model):
    numero = models.CharField(max_length=10)
    capacidad = models.IntegerField(default=0)
    
    def __str__(self):
        return self.numero
    