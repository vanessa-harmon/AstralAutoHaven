import React, { useState, useEffect } from "react";
import './inventory.css';

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

  const handleDeleteModel = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/models/${id}/`, {
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
        <h1>Vehicle Models</h1>
      <div className="vehicle-models">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {models.map((model) => (
          <div className="col" key={model.id}>
            <div className="card border-info mb-5 h-50">
              <div className="card-header">
                <button
                  onClick={() => {
                    handleDeleteModel(model.id);
                  }}
                  className="btn-close"
                  aria-label="Close"
                  type="button"
                ></button>
              </div>
              <img
                src={model.picture_url}
                className="card-img-top"
                alt={model.style_name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {model.manufacturer.name} {model.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default VehicleModelList;
