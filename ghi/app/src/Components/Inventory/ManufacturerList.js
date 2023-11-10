import React, { useState, useEffect } from "react";
import "./inventory.css";
import trash from "../../assets/cutetrash.png";
import edit from "../../assets/edit.png";

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
      fetch(`http://localhost:8100/api/manufacturers/${id}/`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg">
        <h1>Manufacturers</h1>
      <table className="table table-$teal-600 table-bordered">
        <thead>
          <tr>
            <th className="w-75">Name</th>
            <th className="w-25">Action</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteManufacturer(manufacturer.id);
                    }}
                    className="btn btn-sm"
                  >
                    <img src={trash} width="20" height="20" alt="delete" />
                  </button>
                  <button className="btn btn-sm">
                    <img src={edit} width="20" height="20" alt="edit" />
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

export default ManufacturerList;
