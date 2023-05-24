from django.shortcuts import render


# Create your views here.

def base(request) :
    return render(request, 'base.html')

def menu_latte(request) :
    return render(request, './posting/menu-latte.html')

def menu_espresso(request) :
    return render(request, './posting/menu-espresso.html')