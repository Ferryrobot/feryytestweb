from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    mobile = models.CharField(verbose_name="手机号",max_length=11)
    REQUIRED_FIELDS = ["mobile","email"]
    class Meta:
        db_table = 'user'
    def __str__(self):
        return  self.username