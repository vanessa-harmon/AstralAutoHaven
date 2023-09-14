import React, { useState } from "react";

function TechnicianForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.first_name = first_name;
    data.last_name = last_name;
    data.employee_id = employee_id;

    const technicianUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(technicianUrl, fetchConfig);
    if (response.ok) {
      setFirstName("");
      setLastName("");
      setEmployeeID("");
    }
  };

  const [first_name, setFirstName] = useState("");
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const [last_name, setLastName] = useState("");
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const [employee_id, setEmployeeID] = useState("");
  const handleEmployeeIDChange = (event) => {
    const value = event.target.value;
    setEmployeeID(value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Technician</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFirstNameChange}
                placeholder="First Name"
                required
                type="text"
                value={first_name}
                name="first name"
                id="name"
                className="form-control"
              />
              <label htmlFor="First Name">First Name...</label>
              </div>
              <div className="form-floating mb-3">
              <input
                onChange={handleLastNameChange}
                placeholder="Last Name"
                required
                type="text"
                value={last_name}
                name="last name"
                id="name"
                className="form-control"
              />
              <label htmlFor="Last Name">Last Name...</label>
              </div>
              <div className="form-floating mb-3">
              <input
                onChange={handleEmployeeIDChange}
                placeholder="Employee"
                required
                type="text"
                value={employee_id}
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Employee ID...</label>
              <div className="form-floating mb-3"></div>
            </div>
            <button className="btn btn-outline-dark">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
