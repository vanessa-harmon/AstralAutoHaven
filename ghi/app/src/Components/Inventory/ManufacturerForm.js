import React, { useState } from 'react';
import './inventory.css';


function ManufacturerForm () {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            setName('');
        }
    }

    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Manufacturer name..." required type="text" value={name} name="name" id="name" className="form-control"/>
                <label htmlFor="name">Manufacturer name...</label>
              </div>
              <button className="btn btn-outline-info">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ManufacturerForm;
