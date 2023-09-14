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

  const handleDeleteManufacturer = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/manufacturers/${id}/`, { method: "DELETE" }).then(
        () => {
          window.location.reload();
        }
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-4">
        <h1>Manufacturers</h1>
      </div>
      <table className="table table-$teal-600 table-bordered">
        <thead>
        <tr>
            <th className="w-75">Name</th>
            <th className="w-25">Action</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map(manufacturer => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
                <td><button onClick={() => {handleDeleteManufacturer(manufacturer.id)}}
                className="btn btn-sm"><img src="https://w7.pngwing.com/pngs/697/308/png-transparent-delete-icon-trash-trash-icon-essential-icon.png" width="15" height="15" alt="delete"/></button>
                <button
                className="btn btn-sm"><img src="https://w7.pngwing.com/pngs/613/900/png-transparent-computer-icons-editing-delete-button-miscellaneous-angle-logo.png" width="15" height="15" alt="edit"/></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerList;
