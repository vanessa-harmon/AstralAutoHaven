from django.urls import path
from .views import salespeople_list, customer_list, show_salesperson, show_customer, sales_list, show_sale


urlpatterns = [
    path("salespeople/", salespeople_list, name="salespeople_list"),
    path("salespeople/<int:id>/", show_salesperson, name="show_salesperson"),
    path("customers/", customer_list, name="customer_list"),
    path("customers/<int:id>/", show_customer, name="show_customer"),
    path("sales/", sales_list, name="sales_list"),
    path("sales/<int:id>/", show_sale, name="show_sale"),
]
