#from django.db import models
from djongo import models

# Create your models here.
class Carrera(models.Model):
    _id = models.ObjectIdField()
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    
    @property
    def pk(self):
        return self._id
    
    def __str__(self):
        return self.nombre