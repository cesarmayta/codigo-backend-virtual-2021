from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=20)
    
    def __str__(self):
        return self.nombre
    
class Serie(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=20)
    rating = models.IntegerField(default=0)
    
    def __str__(self):
        return self.nombre
    
