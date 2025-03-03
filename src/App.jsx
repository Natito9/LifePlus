import React from 'react';
import './App.css';
import LandingPage from './routes/shared/Login/LandingPage/LandingPage';
import React from 'react';
import PatientHomepage from './routes/patient/PatientHomepage/PatientHomepage';

function App() {
  return (
    <div className="App">
      <p>Group 6</p>
    <LandingPage />
      <PatientHomepage/>
    </div>
  );
}

export default App;
