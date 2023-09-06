import React, { useState, useEffect } from "react";

function AutomobileList() {
  const [automobiles, setAutomobiles] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setAutomobiles(data.automobiles);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteAutomobile = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/automobiles/${id}/`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <div>
        <h1>Automobiles</h1>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{automobile.vin}</td>
                <td>{automobile.color}</td>
                <td>{automobile.year}</td>
                <td>{automobile.model.name}</td>
                <td>{automobile.manufacturer.name}</td>
                <td>{automobile.sold}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteAutomobile(automobile.id);
                    }}
                  >
                    Delete
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

export default AutomobileList;
