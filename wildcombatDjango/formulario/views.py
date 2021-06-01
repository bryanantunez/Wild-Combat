from django.shortcuts import render

def home(request):
    context = {"nombre":"Clases", "tipo":"Disponibles"}
    return render(request, 'formulario/index.html', context)
