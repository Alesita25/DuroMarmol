from django.urls import URLPattern, path
from .views import guia_despacho, home, clientes, mod_clientes,bor_clientes,cotizaciones,ingreso_pedidos,orden_compra,proveedores,inventario


urlpatterns = [
    path('', home, name="home"),
    path('clientes', clientes, name="clientes"),
    path('mod_clientes/<id>',mod_clientes,name='mod_clientes'),
    path('bor_clientes/<id>',bor_clientes,name='bor_clientes'),
    path('cotizaciones', cotizaciones, name="cotizaciones"),
    path('ingreso_pedidos', ingreso_pedidos, name="ingreso_pedidos"),
    path('orden_compra', orden_compra, name="orden_compra"),
    path('proveedores', proveedores, name="proveedores"),
    path('guia_despacho', guia_despacho, name="guia_despacho"),
    path('inventario', inventario, name="inventario")
]