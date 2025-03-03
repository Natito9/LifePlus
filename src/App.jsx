import "./reset.css"
import './App.css';
import React from 'react';
import Navbar from "./components/layout/NavBar/NavBar";
// import PatientHomepage from './routes/patient/PatientHomepage/PatientHomepage';
import HpHomepage from "./routes/healthcare_provider/HpHomepage/HpHomepage";

function App() {
  return (
    <div className="App">
      {/* <PatientHomepage/> */}
      <HpHomepage/>
      <Navbar/>
    </div>
  );
}

export default App;
