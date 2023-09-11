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
    date_time = models.DateField(null=True)
    time_day = models.TimeField(null=True)
    reason = models.CharField(max_length=500)
    status = models.CharField(max_length=200, default='created')
    vin = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        "Technician",
        related_name="technician",
        on_delete=models.CASCADE
    )
