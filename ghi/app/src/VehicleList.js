import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


function VehicleList() {
  const [vehicle, setVehicle] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setVehicle(data.vehicle)
    }
  };

  const handleDeleteShoe = (id) => {

    if (window.confirm("Are you sure?")) {
      fetch(`http://localhost:8100/api/models/${id}`, { method: "DELETE"})
      .then(() => {
        window.location.reload();
      })
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>

          </tr>
        </thead>
        <tbody>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {vehicle.map((vehicles) => {
            return (
              <tr key={vehicles.id}>
              <div className="card h-100">
                <img
                  src={vehicles.picture}
                  className="card-img-top"
                  alt={vehicles.name}/>
                  <div className="card-body">
                    <h5 className="card-title">{vehicles.name}</h5>
                    <p className="card-text">{vehicles.bin}</p>
                  </div>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteShoe(shoe.id);
                    }}
                    className="btn btn-info"
                  >
                    DELETE
                  </button>
                </td>
              </div>
              </tr>
            );
          })}
        </div>
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/shoes/new" className="btn btn-primary btn-lg px-4 gap-3">
          Add new shoes
        </Link>
      </div>
    </div>
  );
}

export default VehicleList;
