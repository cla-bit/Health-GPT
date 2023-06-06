from django.urls import path
from .views import home_view


app_name = 'main'


urlpatterns = [
    path('dashboard/', home_view, name='dashboard'),
]
