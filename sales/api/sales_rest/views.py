from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ObjectDoesNotExist
import logging
from .models import Salesperson, Customer, Sale, AutomobileVO
from .encoders import SalespersonEncoder, CustomerEncoder, SaleEncoder

logger = logging.getLogger(__name__)

@require_http_methods(["GET", "POST"])
def salespeople_list(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def show_salesperson(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )

    elif request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)

        Salesperson.objects.filter(id=id).update(**content)

        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def show_customer(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

    elif request.method == "DELETE":
            count, _ = Customer.objects.filter(id=id).delete()
            if count > 0:
                return JsonResponse({"deleted": "true"})
            else:
                return JsonResponse(
                    {"error": "Customer does not exist"},
                    status=404)

    else:
        content = json.loads(request.body)

        Customer.objects.filter(id=id).update(**content)

        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def sales_list(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_vin = content["automobile"]
            salesperson_id = content["salesperson"]
            customer_id = content["customer"]

            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            salesperson = Salesperson.objects.get(id=salesperson_id)
            customer = Customer.objects.get(id=customer_id)

            content["automobile"] = automobile
            content["salesperson"] = salesperson
            content["customer"] = customer

            sale = Sale.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except ObjectDoesNotExist as e:
            logger.exception(f"AutomobileVO with VIN {automobile_vin} does not exist: {e}")
            response = JsonResponse({"message": f"AutomobileVO with VIN {automobile_vin} does not exist"})
            response.status_code = 400
            return response



@require_http_methods(["DELETE", "GET", "PUT"])
def show_sale(request, id):
    if request.method == "GET":
        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )

    elif request.method == "DELETE":
        count, _ = Sale.objects.filter(id=id).delete()
        if count > 0:
            return JsonResponse({"deleted": "true"})
        else:
            return JsonResponse(
                {"error": "Sale id does not exist"},
                status=404
            )

    else:
        content = json.loads(request.body)

        Sale.objects.filter(id=id).update(**content)

        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )
