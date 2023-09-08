import React, { useState, useEffect } from "react";

function SaleForm() {
  const [automobile, setAutomobile] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");

  const [autos, setAutomobiles] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.automobile = automobile;
    data.salesperson_id = salesperson;
    data.customer_id = customer;
    data.price = price;

    const saleUrl = "http://localhost:8090/api/sales/";

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(saleUrl, fetchConfig);
      if (response.ok) {

        const autoUrl = `http://localhost:8100/api/automobiles/${automobile}/`

        const updateConfig = {
          method: "put",
          body: JSON.stringify({ sold : true }),
          headers: {
            "Content-Type": "application/json",
          },
        };

        try {
          const autoResponse = await fetch(autoUrl, updateConfig);
          if (!autoResponse.ok) {
            console.error('Failed to update:', autoResponse.statusText)
          }
        } catch (error) {
          console.error('An error occurred during the update:', error)
        }

        setAutomobile("");
        setSalesperson("");
        setCustomer("");
        setPrice("");
    }
  }
    catch (error) {
      console.error('An error occurred during the fetch:', error)
    }
  }




  const handleAutomobileChange = (event) => {
    const value = event.target.value;
    setAutomobile(value);
  };
  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  };
  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const fetchData = async () => {
    const autombileUrl = "http://localhost:8100/api/automobiles/";

    const autoResponse = await fetch(autombileUrl);

    if (autoResponse.ok) {
      const data = await autoResponse.json();
      const unsoldAutomobiles = data.autos.filter((automobile) => !automobile.sold);
      setAutomobiles(unsoldAutomobiles);
    }

    const salespersonUrl = "http://localhost:8090/api/salespeople/";

    const salespeopleResponse = await fetch(salespersonUrl);

    if (salespeopleResponse.ok) {
      const data = await salespeopleResponse.json();
      setSalespeople(data.salespeople);
    }

    const customerUrl = "http://localhost:8090/api/customers/";

    const customerResponse = await fetch(customerUrl);

    if (customerResponse.ok) {
      const data = await customerResponse.json();
      setCustomers(data.customers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a new sale</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="mb-3">
              <label htmlFor="automobile vin">Automobile VIN</label>
              <select
                onChange={handleAutomobileChange}
                required
                id="automobile"
                value={automobile}
                name="automobile"
                className="form-select"
              >
                <option value="">Choose an autombile VIN...</option>
                {autos.map((automobile) => {
                  return (
                    <option key={automobile.vin} value={automobile.vin}>
                      {automobile.vin}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="salesperson">Salesperson</label>
              <select
                onChange={handleSalespersonChange}
                required
                id="salesperson"
                value={salesperson}
                name="salesperson"
                className="form-select"
              >
                <option value="">Choose a salesperson...</option>
                {salespeople.map((salesperson) => {
                  return (
                    <option key={salesperson.id} value={salesperson.id}>
                      {salesperson.first_name} {salesperson.last_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="customer">Customer</label>
              <select
                onChange={handleCustomerChange}
                required
                id="customer"
                value={customer}
                name="customer"
                className="form-select"
              >
                <option value="">Choose a customer...</option>
                {customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {customer.first_name} {customer.last_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price">Price</label>
              <input
                onChange={handlePriceChange}
                placeholder="0"
                required
                type="text"
                name="price"
                id="price"
                value={price}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
