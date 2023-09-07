import React, { useEffect, useState } from "react";

function ServiceHistory() {
  const [servicehistory, setServiceHistory] = useState([]);
  const [selectedservice, setSelectedService] = useState("");
  const [servicedata, setServiceData] = useState(null);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/servicehistory/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setServiceHistory(data.servicehistory);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleServiceHistoryChange = (event) => {
    const value = event.target.value;
    setSelectedService(value);

    const selectedserviceData = servicehistory.find(
      (servicehistory) => servicehistory.id === value
    );
    setServiceData(selectedserviceData);
  };

  return (
    <div>
      <h1>Service History</h1>
      <select
        onChange={handleServiceHistoryChange}
        required
        id="servicehistory"
        name="servicehistory"
        value={selectedservice}
        className="form-select"
      >
        <option value="">Select a salesperson</option>
        {servicehistory.map((servicehistory) => {
          return (
            <option key={servicehistory.id} value={servicehistory.id}>
              {servicehistory.customer} {servicehistory.last_name}
            </option>
          );
        })}
      </select>
      {servicedata ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key={servicedata.id}>
              <td>{servicedata.vin}</td>
              <td>{servicedata.customer}</td>
              <td>
                {servicedata.first_name} {servicedata.last_name}
              </td>
              <td>{servicedata.date_time}</td>
              <td>{servicedata.technician}</td>
              <td>{servicedata.reason}</td>
              <td>{servicedata.status}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default ServiceHistory;
