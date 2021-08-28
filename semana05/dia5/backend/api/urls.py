from django.urls import path

from rest_framework_simplejwt.views import (
    TokenRefreshView
)

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaApiView.as_view(),name='categoria'),
    path('mesa',views.MesaApiView.as_view(),name='mesa'),
    path('categoria/<int:categoria_id>/platos',views.CategoriaPlatosApiView.as_view(),name='CategoriaPlato'),
    path('pedido',views.PedidoApiView.as_view(),name='pedido'),
    path('login', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('plato', views.PlatoApiView.as_view(), name='plato'),
]