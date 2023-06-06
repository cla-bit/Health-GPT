from django.db import models
from account.models import CustomUser

# Create your models here.


class UserInput(models.Model):
    name = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    symptoms = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    