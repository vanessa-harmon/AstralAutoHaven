import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/logo2.png";

function Nav() {
  const [inventoryIsOpen, setInventoryIsOpen] = useState(false);
  const [salesIsOpen, setSalesIsOpen] = useState(false);
  const [serviceIsOpen, setServiceIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <button
        className="dropdownBtn"
        onClick={() => setInventoryIsOpen(!inventoryIsOpen)}
      >
        Inventory
      </button>

      {inventoryIsOpen && (
        <div className="dropdown">
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/manufacturers"
          >
            Manufacturers
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/manufacturers/create"
          >
            Create a Manufacturer
          </NavLink>
          <NavLink className="nav-link" activeClass="navactive" to="/models">
            Vehicles Models
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/models/create"
          >
            Create a Vehicle Model
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/automobiles"
          >
            Automobiles
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/automobiles/create"
          >
            Create an Automobile
          </NavLink>
        </div>
      )}

      <button
        className="dropdownBtn"
        onClick={() => setSalesIsOpen(!salesIsOpen)}
      >
        Sales
      </button>

      {salesIsOpen && (
        <div className="dropdown">
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/salespeople"
          >
            Salespeople
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/salespeople/create"
          >
            Add a Salesperson
          </NavLink>
          <NavLink className="nav-link" activeClass="navactive" to="/customers">
            Customers
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="customers/create"
          >
            Add a Customer
          </NavLink>
          <NavLink className="nav-link" activeClass="navactive" to="/sales">
            Sales
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/sales/create"
          >
            Add a Sale
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/sales/history"
          >
            Salesperson History
          </NavLink>
        </div>
      )}

      <button
        className="dropdownBtn"
        onClick={() => setServiceIsOpen(!serviceIsOpen)}
      >
        Service
      </button>

      {serviceIsOpen && (
        <div className="dropdown">
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/technicians"
          >
            Technicians
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/technicians/create"
          >
            Add a Technician
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/appointments"
          >
            Service Appointments
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/appointments/create"
          >
            Schedule Service Appointment
          </NavLink>
          <NavLink
            className="nav-link"
            activeClass="navactive"
            to="/service/history"
          >
            Service Appointments History
          </NavLink>
        </div>
      )}

    </nav>
  );
}

export default Nav;
