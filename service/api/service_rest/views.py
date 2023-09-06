from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import Technician, AutomobileVO
# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=ListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        try:
            id = content["automobile"]
            href = f"/api/automobile/{id}/"
            bins = AutomobileVO.objects.get(import_href=href)
            content["automobile"] = bins

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400,
            )
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=DetailEncoder,
            safe=False,
        )
