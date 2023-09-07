from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Technician, Appointment
from .encoders import TechnicianEncoder, AppointmentEncoder
# Create your views here.

@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def show_appointments(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(**content)

        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def show_technicians(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)
        Technician.objects.filter(id=id).update(**content)

        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
