from dataclasses import fields
from django import forms
from django.forms import ModelForm
from .models import Clientes

class clientesForm(ModelForm):

    class Meta:
        model= Clientes
        fields = ['idCliente','nombreCliente','direccion','telefono','mail']

  