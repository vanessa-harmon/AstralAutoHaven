import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteModel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8080/api/technicians/${id}/`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <div>
        <h1>Technicians</h1>
      </div>
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
                <td>{technician.last_name}</td>
                <td>{technician.employee_id}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteModel(technician.employee_id);
                    }}
                  >
                    Delete
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
