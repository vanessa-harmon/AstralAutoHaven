import React, { useEffect, useState } from "react";

function ServiceHistory() {
    const [appointment, setAppointment] = useState([]);
    //const [selectedAppointment, setselectedAppointment] = useState([])
    const [selectedvin, setSelectedVin] = useState('')

      
    return (
      <table className="table table-hover table-striped border border-5">
        <thead>
          <tr>
            <th className="text-center">Date Time</th>
            <th className="text-center">Customer</th>
            <th className="text-center">VIN</th>
            <th className="text-center">Reason</th>
            <th className="text-center">Status</th>
            <th className="text-center">Technician</th>
            <th className="text-center">VIP</th>
          </tr>
        </thead>
        <tbody>
          {appointments.appointments?.map((appointment) => {
            return (
              <tr key={appointment.id}>
                <td>{appointment.date_time}</td>
                <td className="text-center">{appointment.customer}</td>
                <td className="text-center">{appointment.vin}</td>
                <td className="text-center">{appointment.reason}</td>
                <td className="text-center">{appointment.status}</td>
                <td className="text-center">
                  {appointment.technician.first_name}{" "}
                  {appointment.technician.last_name}
                </td>
                <td className="text-center">{vip(appointment.vin)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

  }

export default ServiceHistory;
