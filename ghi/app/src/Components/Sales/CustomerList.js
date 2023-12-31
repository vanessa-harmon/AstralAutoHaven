import React, { useState, useEffect } from "react";
import './sales.css'


function CustomerList() {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers);
    }
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8090/api/customers/${id}/`, { method: "DELETE" }).then(
        () => {
          window.location.reload();
        }
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="customers">
        <h1>Customers</h1>
      <table className="table table-striped">
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => {
            return (
              <tr key={customer.id}>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.phone_number}</td>
                <td>{customer.address}</td>
                <td><button onClick={() => {handleDeleteCustomer(customer.id)}}
                className="btn-close float-right"
                aria-label="Close"></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
