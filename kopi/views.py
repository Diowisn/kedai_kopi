from django.shortcuts import render


# Create your views here.

def base(request) :
    return render(request, 'base.html')

# def latte(request) :
#     return render(request, '../posting/latte.html')

# def espresso(request) :
#     return render(request, '../posting/espresso.html')