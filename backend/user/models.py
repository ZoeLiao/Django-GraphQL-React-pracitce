from django.contrib.auth.models import (
    AbstractUser,
    UserManager
)
from django.db import models


class CustomUser(AbstractUser):

    objects = UserManager()

    @property
    def is_private_account(self):
        if self.email.split('@')[1] == 'gmail.com':
            return True
        return False

    class Meta:
        db_table = 'user'
