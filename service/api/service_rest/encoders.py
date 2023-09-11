from common.json import ModelEncoder
from .models import Technician, Appointment


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
      "id",
      "employee_id",
      "first_name",
      "last_name",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
      "id",
      "date_time",
      "time_day",
      "reason",
      "status",
      "vin",
      "vip",
      "customer",
      "technician",
    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }
