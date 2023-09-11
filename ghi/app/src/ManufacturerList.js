import React, { useState, useEffect } from "react";


function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteManufacturer = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/manufacturers/${id}/`, { method: "DELETE" }).then(
        () => {
          window.location.reload();
        }
      );
    }
  };


  return (
    <div>
      <div className="mt-4">
        <h1>Manufacturers</h1>
      </div>
      <table className="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
                <td><button onClick={() => {handleDeleteManufacturer(manufacturer.id)}}
                className="btn btn-outline-dark btn-sm">Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerList;
