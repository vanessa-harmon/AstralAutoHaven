# Astral Auto Haven

Astral Auto Haven is an application for managing aspects of an automobile dealership—specifically its inventory, service center, and sales.

Team:

* Dante Burger - Service Center

    Show a list of appointments
    Create a appointment
    Show a list of technicians
    Create a technician
    Show a list of service history

* Vanessa Harmon - Sales

    Show a list of customers
    Create a customer
    Show a list of sales
    Create a sale
    Show a list of salespeople
    Create an a salesperson
    Show a list of salesperson history

* Inventory was a shared responsibility between teammates.

    Show a list of manufacturers
    Create a manufacturer
    Show a list of vehicle models
    Create a vehicle model
    Show a list of automobiles in inventory
    Create an automobile in inventory


## Functionality

- Look through inventory: vehicle models, automobiles, manufactures
- Add salesperson, add customer, sell vehicle in inventory to customer, see sale history
- Add technicians, set service appointments, see service history

## Service microservice

Technician model: represents the technician handling the service appointment
Appointment model: represents a service appointment from a customer
AutomobileVO model is used to fetch automobile info from the Inventory microservice.

The Service functionality keeps track of service appointments for automobiles.
and their owners

## Sales microservice

Salesperson model: represents the salesperson making sales
Customer model: represents the customer purchasing an automobile
Sale model: represents the trasnaction.
AutomobileVO model is used to fetch automobile info from the Inventory microservice.

Sales microservice tracks automobile sales from the inventory and
prevents unauthorized or duplicate sales.

## Onboarding
1. docker volume create beta-data
2. docker-compose build
3. docker-compose up

## Tech Stack

- Django
- RESTful APIs
- React JS
- Domain Driven Design
- React
- React Hooks
- Microservices
