from django.db import models

# Create your models here.
class Banco(models.Model):
    name = models.TextField()
    email = models.EmailField()
    message = models.TextField()
