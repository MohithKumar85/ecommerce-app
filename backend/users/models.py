from django.db import models


class Signup(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)


class Login(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)