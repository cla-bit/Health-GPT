from .models import CustomUser
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class CustomUserRegistrationForm(UserCreationForm):
    blood_group = forms.ChoiceField(choices=CustomUser.BLOOD_GROUP, required=False)
    genotype = forms.ChoiceField(choices=CustomUser.GENOTYPE_CHOICES, required=False)

    class Meta:
        model = CustomUser
        fields = [
            'username', 'password1', 'password2',
            'blood_group', 'genotype'
        ]


class CustomUserLoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']
