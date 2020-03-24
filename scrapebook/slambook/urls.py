from django.conf.urls import url, include
from django.contrib import admin
from .api import views

urlpatterns = [
    url('http://localhost:4200/home/home/', views.index, name='index'),
    url(r'admin/', admin.site.urls),
    url(r'api/', include('slambook.api.urls'))
]
