from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Signup, Login



def signup(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        phone = request.POST['phone']
        signup = Signup(name=name, email=email, password=password, confirm_password=confirm_password, phone=phone)
        signup.save()
        return redirect('login')
    return render(request, 'signup.html')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        login = Login(email=email, password=password)
        login.save()
        return redirect('home')
    return render(request, 'login.html')
