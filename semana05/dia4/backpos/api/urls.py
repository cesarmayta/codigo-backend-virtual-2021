from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaApiView.as_view(),name='categoria'),
    path('mesa',views.MesaApiView.as_view(),name='mesa'),
    path('categoria/<int:categoria_id>/platos',views.CategoriaPlatosApiView.as_view(),name='CategoriaPlato')
]