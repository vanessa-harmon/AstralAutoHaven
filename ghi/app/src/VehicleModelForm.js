import React, { useState, useEffect } from "react";

function VehicleModelForm() {
  const [name, setName] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.picture_url = pictureUrl;
    data.manufacturer_id = manufacturer;

    const modelUrl = 'http://localhost:8100/api/models/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(modelUrl, fetchConfig);

      if (response.ok) {
        setName('');
        setPictureUrl('');
        setManufacturer('')
      } else {
        console.error('Error:', response)
      }
    } catch (error) {
      console.error('Network Error:', error);
    }
  }


  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handlePictureUrlChange = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  };

  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };

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

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a vehicle model</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                placeholder="Model"
                required
                type="text"
                value={name}
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Model name...</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handlePictureUrlChange}
                placeholder="Picture"
                required
                type="url"
                value={pictureUrl}
                name="picture_url"
                id="picture_url"
                className="form-control"
              />
              <label htmlFor="picture url">Picture URL...</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleManufacturerChange}
                required
                id="manufacturer"
                value={manufacturer}
                name="manufacturer"
                className="form-select"
              >
                <option value="">Choose a manufacturer...</option>
                {manufacturers.map(manufacturer => {
                  return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VehicleModelForm;
