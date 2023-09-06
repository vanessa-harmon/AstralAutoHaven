import React, { useState } from 'react';


function SaleForm () {
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.automobile = automobile;
        data.salesperson = salesperson;
        data.customer = customer;
        data.price = price;

        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(saleUrl, fetchConfig);
        if (response.ok) {
            setAutomobile('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }
    }

    // const handleNameChange = (event) => {
    //     const value = event.target.value;
    //     setName(value);
    // }

    const [autos, setAutomobiles] = useState([]);
    const fetchData = async () => {
      const url = "http://localhost:8100/api/automobiles/";

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos);
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
              <select placeholder='Choose an automobile VIN...' required id="automobile" value={automobile} name="automobile" className="form-select">
                <option value="">Automobile VIN</option>
                {autos.map(automobile => {
                  return (
                    <option key={automobile.id} value={automobile.id}>
                        {automobile.vin}
                    </option>
                  )
                })}
              </select>
            </div>
              <div className="mb-3">
              <label htmlFor="name">Price</label>
                <input placeholder="0" required type="number" value={price} name="price" id="price" className="form-control"/>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SaleForm;
