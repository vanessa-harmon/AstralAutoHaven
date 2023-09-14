import React, { useEffect, useState } from "react";

function ServiceHistory() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [vip, setVip] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointment);
    }
  };

  const fetchAutomobiles = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const vinList = [];
      data.autos.map((auto) => vinList.push(auto.vin));
      setVip(vinList);
    }
  };

  const vinExists = (vin) => {
    if (vip.includes(vin)) {
      return "Yes";
    } else {
      return "No";
    }
  };

  useEffect(() => {
    fetchData();
    fetchAutomobiles();
  }, []);

  return (
    <div>
      <div className="mt-4">
        <h1>Service History</h1>
      </div>
      <form>
        <input
          className="my-3"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Vin"
        ></input>
      </form>
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
          {appointments
            ?.filter((appointment) => {
              return search.toLowerCase() === ""
                ? appointment
                : appointment.vin.toLowerCase().includes(search);
            })
            .map((appointment) => {
              return (
                <tr key={appointment.vin}>
                  <td>{appointment.vin}</td>
                  <td>{vinExists(appointment.vin)}</td>
                  <td>{appointment.customer}</td>
                  <td>{appointment.date_time}</td>
                  <td>{appointment.time_day}</td>
                  <td>{appointment.technician.employee_id}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceHistory;
