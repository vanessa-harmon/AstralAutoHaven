import React, { useState, useEffect } from "react";
import './service.css'


function AppointmentList() {
  const [appointments, setAppointment] = useState([]);
  const [vip, setVip] = useState([])
  const filteredappointments = appointments.filter(appointment=> appointment.status === 'Created')

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointment(data.appointment);
    }
  };

  const handleCancelModel = (id) => {
    if (window.confirm("Are you sure you want to cancel?")) {
      fetch(`http://localhost:8080/api/appointments/${id}/`, {
        method: "PUT",
        body: JSON.stringify({status: "Canceled"})
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const handleFinishModel = (id) => {
    if (window.confirm("Is service complete?")) {
      fetch(`http://localhost:8080/api/appointments/${id}/`, {
        method: "PUT",
        body: JSON.stringify({ status: "Finished" }),
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const fetchAutomobiles = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const vinList = []
      data.autos.map((cars) => vinList.push(cars.vin))
    setVip(vinList);
    }
  };

const vinChange = (vin) => {
  if (vip.includes(vin)) {
    return "Yes";
  }else{
    return "No";
  }
};

useEffect(() => {
  fetchData();
  fetchAutomobiles();
}, []);

  return (
    <div className="service-appts">
        <h1>Service Appointments</h1>
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
          {filteredappointments.map(appointment => {
            return (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>{vinChange(appointment.vin)}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.date_time}</td>
                <td>{appointment.time_day}</td>
                <td>{appointment.technician.employee_id}</td>
                <td>{appointment.reason}</td>
                <td>
                  <button
                    onClick={() => {
                      handleCancelModel(appointment.id);
                    }}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleFinishModel(appointment.id);
                    }}
                    class="btn btn-success"
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
