import React, { useEffect, useState } from "react";

function ServiceHistory() {
    const [appointment, setAppointment] = useState([]);
    //const [selectedAppointment, setselectedAppointment] = useState([])
    const [selectedvin, setSelectedVin] = useState('')

    return (
      <table className="table table-hover table-striped border border-5">
        <thead>
          <tr>
            <th>Date Time</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Technician</th>
            <th>VIP</th>
          </tr>
        </thead>
        <tbody>
          {appointment.appointments?.map((appointment) => {
            return (
              <tr key={appointment.id}>
                <td>{appointment.date_time}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.vin}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.status}</td>
                <td>
                  {appointment.technician.first_name}{" "}
                  {appointment.technician.last_name}
                </td>
                {/* <td className="text-center">{vip(appointment.vin)}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    );

  }

export default ServiceHistory;
