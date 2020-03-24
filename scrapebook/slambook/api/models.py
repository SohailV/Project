from django.db import models
from django.shortcuts import render


class AboutUser(models.Model):
    username = models.CharField(max_length=100)
    about = models.CharField(max_length=100)

    # @classmethod
    # def udetails(cls, request):
    #     if request.method == "POST":
    #         uname = request.POST['username']
    #     query = AboutUser.objects.raw('SELECT about FROM AboutUser WHERE username = %s', [uname])
    #     return render(request, "../web/src/app/home/home.component", {'hi': 'hi1'})

