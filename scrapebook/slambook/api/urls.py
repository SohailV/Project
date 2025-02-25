from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from slambook.api import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet1)
router.register(r'about', views.UserViewSet2)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view())
]
