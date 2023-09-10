# CarCar

Team:

* Dante Storm - Service
* Vanessa Harmon - Sales

## Design

## Service microservice

Technician model: represents the technician handling the service appointment
Appointment model: represents a service appointment from a customer
AutomobileVO model is used to fetch automobile info from the Inventory microservice.

The Service functionality needs to keep track of service appointments for automobiles
and their owners

## Sales microservice

Salesperson model: represents the salesperson making sales
Customer model: represents the customer purchasing an automobile
Sale model: represents the trasnaction.
AutomobileVO model is used to fetch automobile info from the Inventory microservice.

Sales microservice tracks automobile sales from the inventory and
prevents unauthorized or duplicate sales.
