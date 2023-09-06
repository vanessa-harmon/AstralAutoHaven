from django.db import models

# Create your models here.


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveSmallIntegerField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField(default=False)


class Appointment(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    reason = models.CharField(max_length=500)
    status = models.CharField(max_length=200)
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        "AutomobileVO",
        related_name="vehicles",
        on_delete=models.CASCADE
    )
