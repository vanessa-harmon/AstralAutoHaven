import React, { useState, useEffect } from "react";

function AppointmentList() {
  const [appointments, setAppointment] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointment(data.appointment);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteModel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8080/api/appointments/${id}/`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };
  const handleCancelModel = (id) => {
    if (window.confirm("Are you sure you want to cancel?")) {
      fetch(`http://localhost:8080/api/appointments/${id}/`, {
        method: "PUT",
        body: JSON.stringify({status: "canceled"})
      }).then(() => {
        window.location.reload();
      });
    }
  };
  const handleFinishModel = (id) => {
    if (window.confirm("Is service complete?")) {
      fetch(`http://localhost:8080/api/appointments/${id}/`, {
        method: "PUT",
        body: JSON.stringify({ status: "finished" }),
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
          {appointments?.map(appointment => {
            return (
              <tr key={appointment.vin}>
                <td>{appointment.vin}</td>
                <td></td>
                <td>{appointment.customer}</td>
                <td>{appointment.date_time}</td>
                <td>{appointment.date_time}</td>
                <td>{appointment.technician.employee_id}</td>
                <td>{appointment.reason}</td>
                <td>
                  <button
                    onClick={() => {
                      handleCancelModel(appointment.id);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleFinishModel(appointment.id);
                    }}
                  >
                    Finish
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
