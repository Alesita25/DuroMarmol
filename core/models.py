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

#Modelo para el vehiculo

# class vehiculo(models.Model):
#     patente = models.CharField(max_length=6,primary_key=True, verbose_name='Patente')
#     marca = models.CharField(max_length=20,verbose_name='Marca vehiculo')
#     modelo = models.CharField(max_length=20, null=True, blank=True,verbose_name='Modelo')
#     categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.patente


