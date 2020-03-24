from django.contrib.auth.models import User, Group
from django.shortcuts import render
from rest_framework import viewsets
from slambook.api.models import AboutUser
from slambook.api.serializers import UserSerializer, UserAboutSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class UserViewSet1(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class UserViewSet2(viewsets.ModelViewSet):
    """
    API endpoint that allows users about to be viewed or edited.
    """
    queryset = AboutUser.objects.all()
    serializer_class = UserAboutSerializer


def index(request):
    #     if request.method == "POST":
    #        uname = request.POST['username']
    #   query = AboutUser.objects.raw('SELECT about FROM AboutUser WHERE username = %s', [uname])
    return render(request, "index.html", {'hi': 200})
