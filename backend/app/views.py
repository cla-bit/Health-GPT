from django.shortcuts import render
from .forms import UserInputForm

# Create your views here.


def home_view(request):
    context = {}
    return render(request, 'app/home.html', context)


def diagnosis_view(request):
    context = {}
    if request.method == 'POST':
        form = UserInputForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'app/diagnosis.html', context)
