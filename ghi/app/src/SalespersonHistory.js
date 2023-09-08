import React, { useEffect, useState } from "react";

function SalespersonHistory() {
  const [salespeople, setSalespeople] = useState([]);
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [salespersonSales, setSalespersonSales] = useState([]);
  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    const salespeopleUrl = "http://localhost:8090/api/salespeople/";
    const response = await fetch(salespeopleUrl);

    const salesUrl = "http://localhost:8090/api/sales/";
    const salesResponse = await fetch(salesUrl);

    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }

    if (salesResponse.ok) {
      const salesData = await salesResponse.json();
      setSales(salesData.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSelectedSalesperson(value);

    const selectedSalespersonSales = sales.filter(
      (sale) => sale.salesperson.id == value
    );
    setSalespersonSales(selectedSalespersonSales);
  };

  return (
    <div>
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
      </div>
      <div>
        {salespersonSales.map((sale) => (
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
              <tr key={sale.id}>
                <td>
                  {sale.salesperson.first_name} {sale.salesperson.last_name}
                </td>
                <td>
                  {sale.customer.first_name} {sale.customer.last_name}
                </td>
                <td>{sale.automobile.vin}</td>
                <td>${sale.price}.00</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default SalespersonHistory;
