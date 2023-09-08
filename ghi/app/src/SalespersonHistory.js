import React, { useEffect, useState } from "react";

function SalespersonHistory() {
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [salespersonSales, setSalespersonSales] = useState([]);

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

    const selectedSalespersonSales = salespersonSales.filter(
      (sale) => sale.salesperson.id === value
    );
    setSalespersonSales(selectedSalespersonSales);
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
            {salespersonSales.map(sale => (
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default SalespersonHistory;
