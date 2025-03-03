import "./reset.css"
import './App.css';
import React from 'react';
import Navbar from "./components/layout/NavBar/NavBar";
import PatientHomepage from './routes/patient/PatientHomepage/PatientHomepage';

function App() {
  return (
    <div className="App">
      <PatientHomepage/>
      <Navbar/>
    </div>
  );
}

export default App;
