from django.urls import path
from .views import list_technicians, list_appointments, show_appointments, show_technicians

urlpatterns = [
    path("technicians/", list_technicians, name="list_technicians"),
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:id>/", show_appointments, name="show_appointments"),
    path("technicians/<int:id>/", show_technicians, name="show_technicians"),
]
