import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from   './AutomobileList';
import SalespersonForm from './SalespersonForm';
import SalespeopleList from './SalespeopleList';
import AutomobileForm from './AutomobileForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import SaleForm from './SaleForm';
import SaleList from './SaleList';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import SalespersonHistory from './SalespersonHistory';
import ServiceHistory from './ServiceHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route path="" element={<ManufacturerList />} />
            <Route path="create" element={<ManufacturerForm />} />
          </Route>

          <Route path="models">
            <Route path="" element={<VehicleModelList />} />
            <Route path="create" element={<VehicleModelForm />} />
          </Route>

          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="create" element={<AutomobileForm />} />
          </Route>

          <Route path="salespeople">
            <Route path="" element={<SalespeopleList />} />
            <Route path="create" element={<SalespersonForm />} />
          </Route>

          <Route path="customers">
            <Route path="" element={<CustomerList />} />
            <Route path="create" element={<CustomerForm />} />
          </Route>

          <Route path="technicians">
            <Route path="" element={<TechnicianList />} />
            <Route path="create" element={<TechnicianForm />} />
          </Route>

          <Route path="sales">
            <Route path="" element={<SaleList />} />
            <Route path="create" element={<SaleForm />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>

          <Route path="appointments">
            <Route path="" element={<AppointmentList />} />
            <Route path="create" element={<AppointmentForm />} />
          </Route>

          <Route path="service">
            <Route path="history" element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
