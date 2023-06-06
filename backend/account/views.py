from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
from django.shortcuts import redirect, render

from .forms import CustomUserRegistrationForm, CustomUserLoginForm

# Create your views here.


def register_view(request):
    context = {}
    if request.method == 'POST':
        form = CustomUserRegistrationForm(request.POST)

        # validating the form data gotten from input
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            email = form.cleaned_data.get('email')

            # send mail to the user
            send_mail(
                'Your account has been created',
                f'Your account has been created for {username}',
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False
            )

            # authenticate the user
            user = authenticate(username=username, password=raw_password)

            # login the user
            login(request, user)

            # redirect to login page after registration
            return redirect('account:login')
    else:
        form = CustomUserRegistrationForm()
        context['form'] = form
    return render(request, 'account/register.html', context)


def login_view(request):
    context = {}
    if request.method == 'POST':

        # create an instance of login form
        form = CustomUserLoginForm(data=request.POST)

        # validating the form data gotten from input
        if form.is_valid():
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password')

            # authenticate the user
            user = authenticate(username=username, password=raw_password)

            # login the user
            if user is not None:
                login(request, user)

                # log the user to dashboard
                return redirect('main:dashboard')
            else:
                # invalid username or password
                form.add_error(None, 'Invalid username or password.')
    else:
        form = CustomUserLoginForm()
        context['form'] = form
    return render(request, 'account/login.html', context)


def logout_view(request):
    logout(request)
    return redirect('account:login')

