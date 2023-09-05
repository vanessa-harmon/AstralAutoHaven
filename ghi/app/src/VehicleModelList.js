import React, { useState, useEffect } from "react";


function VehicleModelList() {
  const [models, setModels] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteModel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/models/${id}/`, { method: "DELETE" }).then(
        () => {
          window.location.reload();
        }
      );
    }
  };

  return (
    <div>
      <div>
        <h1>Models</h1>
      </div>
      <table className="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img src={model.picture_url} alt={model.name} /></td>
                <td><button onClick={() => {handleDeleteModel(model.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleModelList;
