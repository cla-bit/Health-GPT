from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    BLOOD_GROUP = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
    ]

    GENOTYPE_CHOICES = [
        ('AA', 'AA'),
        ('AS', 'AS'),
        ('SS', 'SS'),
    ]

    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP, blank=True)
    genotype = models.CharField(max_length=2, choices=GENOTYPE_CHOICES, blank=True)

