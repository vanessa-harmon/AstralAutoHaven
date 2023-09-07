import React, { useState, useEffect } from "react";

function AppointmentForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.date_time = date_time;
    data.reason = reason;
    data.status = status;
    data.vin = vin;
    data.customer = customer;
    data.technician = technician;

    const techniciansUrl = "http://localhost:8080/api/appointments/";

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(techniciansUrl, fetchConfig);
    if (response.ok) {
      setDateTime("");
      setReason("");
      setStatus("");
      setVin("");
      setCustomer("");
      setTechnician("");
    }
  };

  const [date_time, setDateTime] = useState("");
  const handleDateTimeChange = (event) => {
    const value = event.target.value;
    setDateTime(value);
  };

  const [date_times, setDateTimes] = useState("");
  const handleDateTimesChange = (event) => {
    const value = event.target.value;
    setDateTimes(value);
  };


  const [reason, setReason] = useState("");
  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  };

  const [status, setStatus] = useState("");
  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  const [vin, setVin] = useState("");
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const [customer, setCustomer] = useState("");
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };

  const [technician, setTechnician] = useState("");
  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  };

  const [technicians, setTechnicians] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create an appointment</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleDateTimeChange}
                placeholder="Date"
                required
                type="date"
                value={date_time}
                name="date_time"
                id="date_time"
                className="form-control"
              />
              <label htmlFor="name">Date...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleDateTimesChange}
                placeholder="Time"
                required
                type="time"
                value={date_times}
                name="date_time"
                id="date_time"
                className="form-control"
              />
              <label htmlFor="name">Time of Day...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleReasonChange}
                placeholder="Reason"
                required
                type="text"
                value={reason}
                name="Reason"
                id="reason"
                className="form-control"
              />
              <label htmlFor="city">Reason for visit...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleStatusChange}
                placeholder="Status"
                required
                type="text"
                value={status}
                name="status"
                id="status"
                className="form-control"
              />
              <label htmlFor="city">Status...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleVinChange}
                placeholder="VIN"
                required
                type="text"
                value={vin}
                name="VIN"
                id="VIN"
                className="form-control"
              />
              <label htmlFor="city">Automobile VIN...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleCustomerChange}
                placeholder="Customer"
                required
                type="text"
                value={customer}
                name="Customer"
                id="customer"
                className="form-control"
              />
              <label htmlFor="city">Customer Name...</label>
            </div>
            {/* <div className="mb-3">
              <select
                onChange={handleTechnicianChange}
                required
                id="technician"
                value={technician}
                name="technician"
                className="form-select"
              >
                <option value="">Choose a technician...</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.id} value={technician.id}>
                      {technician.last_name}
                    </option>
                  );
                })}
              </select>
            </div> */}
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
