from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth

# Create your views here.
def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                request.POST['username'], password=request.POST['password1'])
            return redirect('main')
        else:
            return redirect('main')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('main')
        else :
            return render(request, 'home.html', {'error': 'username or password is incorrect.'})

def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        return redirect('main')
    return render(request, 'home.html')

def record(request):
    if request.user.is_authenticated == True:
        return render(request, 'record.html')
    else:
        return render(request, "home.html")

def resconfirm(request):
    if request.user.is_authenticated == True:
        return render(request, 'resconfirm.html')
    else:
        return render(request, "home.html")
    