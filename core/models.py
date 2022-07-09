from django.db import models

# Create your models here.

class Clientes(models.Model):
    idCliente =models.IntegerField(primary_key=True,verbose_name='Id Cliente')
    nombreCliente = models.CharField(max_length=50, verbose_name='Nombre cliente')
    direccion = models.CharField(max_length=50, verbose_name='Dirección')
    telefono = models.CharField(max_length=50, verbose_name='Telefono')
    mail = models.CharField(max_length=50, verbose_name='Email')
    
    def __str__(self):
        return self.nombreCliente

class productos(models.Model):
    idProducto =models.IntegerField(primary_key=True,verbose_name='Id Producto')
    nombreProducto = models.CharField(max_length=50, verbose_name='Nombre Producto')
    tipo = models.CharField(max_length=50, verbose_name='Tipo Producto')
    cantidad = models.CharField(max_length=50, verbose_name='Cantidad')

    def __str__(self):
        return self.nombreProducto
