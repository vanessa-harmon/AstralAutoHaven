import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Components/NavBar/Nav";
import AutomobileForm from "./Components/Inventory/AutomobileForm";
import AutomobileList from "./Components/Inventory/AutomobileList";
import ManufacturerList from "./Components/Inventory/ManufacturerList";
import ManufacturerForm from "./Components/Inventory/ManufacturerForm";
import VehicleModelList from "./Components/Inventory/VehicleModelList";
import VehicleModelForm from "./Components/Inventory/VehicleModelForm";
import CustomerList from "./Components/Sales/CustomerList";
import CustomerForm from "./Components/Sales/CustomerForm";
import SaleForm from "./Components/Sales/SaleForm";
import SaleList from "./Components/Sales/SaleList";
import SalespersonForm from "./Components/Sales/SalespersonForm";
import SalespeopleList from "./Components/Sales/SalespeopleList";
import SalespersonHistory from "./Components/Sales/SalespersonHistory";
import TechnicianList from "./Components/Service/TechnicianList";
import TechnicianForm from "./Components/Service/TechnicianForm";
import AppointmentList from "./Components/Service/AppointmentList";
import AppointmentForm from "./Components/Service/AppointmentForm";
import ServiceHistory from "./Components/Service/ServiceHistory";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
    </BrowserRouter>
  );
}

export default App;
