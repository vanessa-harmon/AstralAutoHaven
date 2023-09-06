import React, { useState, useEffect } from "react";


function SaleList() {
  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteSale = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8100/api/manufacturers/${id}/`, { method: "DELETE" }).then(
        () => {
          window.location.reload();
        }
      );
    }
  };


  return (
    <div>
      <div>
        <h1>Sales</h1>
      </div>
      <table className="table table-striped">
        <thead>
        <tr>
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{sale.name}</td>
                <td>{sale.name}</td>
                <td>{sale.name}</td>
                <td>{sale.name}</td>
                <td>${sale.price}</td>
                <td><button onClick={() => {handleDeleteSale(sale.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SaleList;
