import React, { useEffect, useState } from "react";

function SalespersonHistory() {
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [salespersonData, setSalespersonData] = useState(null);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/salespeople/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSelectedSalesperson(value);

    const selectedSalespersonData = salespeople.find(
        (salesperson) => salesperson.id === value
    );
    setSalespersonData(selectedSalespersonData)
  };

  return (
    <div>
      <h1>Salesperson History</h1>
      <select
        onChange={handleSalespersonChange}
        required
        id="salesperson"
        name="salesperson"
        value={selectedSalesperson}
        className="form-select"
      >
        <option value="">Select a salesperson</option>
        {salespeople.map((salesperson) => {
          return (
            <option key={salesperson.id} value={salesperson.id}>
              {salesperson.first_name} {salesperson.last_name}
            </option>
          );
        })}
      </select>
        {salespersonData ? (
            <table className="table table-striped">
            <thead>
              <tr>
                <th>Salesperson</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr key={salespersonData.id}>
                <td>
                  {salespersonData.first_name} {salespersonData.last_name}
                </td>
                <td>{salespersonData.customer}</td>
                <td>{salespersonData.vin}</td>
                <td>${salespersonData.price}</td>
              </tr>
            </tbody>
          </table>
        ) : null}
    </div>
  );
}

export default SalespersonHistory;
