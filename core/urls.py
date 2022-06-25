from django.urls import URLPattern, path
from .views import home, clientes, mod_clientes,bor_clientes


urlpatterns = [
    path('', home, name="home"),
    path('clientes', clientes, name="clientes"),
    path('mod_clientes/<id>',mod_clientes,name='mod_clientes'),
    path('bor_clientes/<id>',bor_clientes,name='bor_clientes')
]