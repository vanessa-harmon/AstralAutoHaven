import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// async function loadManufacturers() {
//   const response = await fetch("http://localhost:8100/api/manufacturers/");
//   if (response.ok) {
//     const manufacturerData = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App manufacturers={manufacturerData.manufacturers} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error("ERROR", response);
//   }
// }
// loadManufacturers();

// async function loadModels() {
//   const response = await fetch("http://localhost:8100/api/models/");
//   if (response.ok) {
//     const modelData = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App models={modelData.models} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error("ERROR", response);
//   }
// }
// loadModels();


// async function loadAutomobiles() {
//   const response = await fetch("http://localhost:8100/api/automobiles/");
//   if (response.ok) {
//     const automobileData = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App automobiles={automobileData.autos} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error("ERROR", response);
//   }
// }
// loadAutomobiles();


// async function loadSalespeople() {
//   const response = await fetch('http://localhost:8090/api/salespeople/');
//   if (response.ok) {
//     const salespeopleData = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App salespeople={salespeopleData.salespeople} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error("ERROR", response);
//   }
// }
// loadSalespeople();
