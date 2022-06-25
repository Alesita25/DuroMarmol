from django.shortcuts import render, redirect
from core.forms import clientesForm
from .models import Clientes

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

# def clientes(request):
#     return render(request, 'core/clientes.html')


def clientes(request):
    cli= clientesForm()
    clientes=Clientes.objects.all()
    

    datos={
        'form': cli,
        'clientes':clientes,
        
    }
    if request.method=='POST':
        formulario = clientesForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Guardados Correctamente"

    return render(request, 'core/clientes.html',datos)

def mod_clientes(request,id):
    clientes = Clientes.objects.get(idCliente=id)
    datos = {
            'form': clientesForm(instance=clientes)
}
    if request.method == 'POST':
        formulario = clientesForm(data=request.POST,instance=clientes)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Modificados correctamente"
    return render(request, 'core/mod_clientes.html',datos)

def bor_clientes(request,id):
    clientes = Clientes.objects.get(idCliente=id)
    clientes.delete()
    return redirect(to="home")