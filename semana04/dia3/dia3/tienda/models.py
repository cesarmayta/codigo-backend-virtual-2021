from django.db import models
"""
para migrar modelos a base datos
python manage.py makemigrations
python manage.py migrate

"""
# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.nombre
    
class Producto(models.Model):
    categoria = models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    nombre = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=6,decimal_places=2)
    stock = models.IntegerField(default=0)
    pub_date = models.DateTimeField('fecha registro')
    imagen = models.ImageField(upload_to='productos',blank=True,null=True)
    
    def __str__(self):
        return self.nombre