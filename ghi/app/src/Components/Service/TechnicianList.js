import React, { useState, useEffect } from "react";
import './service.css'


function TechnicianList() {
  const [technician, setTechnician] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnician(data.technician);
    }
  };

  const handleDeleteModel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8080/api/technicians/${id}/`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="technicians">
        <h1>Technicians</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {technician.map((technician) => {
            return (
              <tr key={technician.first_name}>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
                <td>{technician.employee_id}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteModel(technician.id);
                    }}
                    className="btn-close"
                    aria-label="Close"
                    type="button"
                  >
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianList;
