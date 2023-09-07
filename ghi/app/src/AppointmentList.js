import React, { useState, useEffect } from "react";

function AppointmentList() {
  const [appointments, setAppointment] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointment(data.appointments);
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
        <h1>Appointments</h1>
      </div>
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
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            return (
              <tr key={appointment.vin}>
                <td>{appointment.customer}</td>
                <td>{appointment.date_time}</td>
                <td>{appointment.technician}</td>
                <td>{appointment.reason}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteModel(appointment.id);
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

export default AppointmentList;
