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

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} />

          <Route path="models" element={<VehicleModelList />} />
          <Route path="models/create" element={<VehicleModelForm />} />

          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="automobiles/create" element={<AutomobileForm />} />

          <Route path="" element={<SalespeopleList />} />
          <Route path="create" element={<SalespersonForm />} />
\
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
