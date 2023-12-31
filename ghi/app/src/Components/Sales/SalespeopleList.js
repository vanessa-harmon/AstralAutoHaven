import React, { useState, useEffect } from "react";
import './sales.css'


function SalespeopleList() {
  const [salespeople, setSalesPeople] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalesPeople(data.salespeople);
    }
  };

  const handleDeleteSalesperson = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8090/api/salespeople/${id}/`, { method: "DELETE" })
      .then(() => {window.location.reload();}
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="salespeople">
        <h1>Salespeople</h1>
      <table className="table table-striped">
        <thead>
        <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map(salesperson => {
            return (
              <tr key={salesperson.id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name}</td>
                <td>{salesperson.last_name}</td>
                <td><button onClick={() => {handleDeleteSalesperson(salesperson.id)}}
                className="btn-close"
                aria-label="Close"></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SalespeopleList;
