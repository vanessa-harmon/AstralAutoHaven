import React, { useEffect, useState } from "react";

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState('');
    const fetchData = async () => {
      const url = "http://localhost:8080/api/appointments/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointment);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
    <div>
      <div>
        <h1>Service History</h1>
      </div>
        <form>
          <input className='my-3' onChange={(e) => setSearch(e.target.value)}

            placeholder='Search Vin'>
          </input>
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
          {appointments?.filter((appointment) => {
            return search.toLowerCase() === '' ? appointment : appointment.vin.toLowerCase().includes(search)
          }).map(appointment => {
            return (
              <tr key={appointment.vin}>
                <td>{appointment.vin}</td>
                <td>{appointment.vip ? "Yes" : "No"}</td>
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
