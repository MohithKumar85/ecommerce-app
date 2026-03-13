from django.db import models

class Signup:
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)
    phone = models.int(max_length=10)

class Login:
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)