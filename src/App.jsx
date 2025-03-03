import React from 'react';
import './App.css';
import LandingPage from './routes/shared/LandingPage/LandingPage';
import PatientHomepage from './routes/patient/PatientHomepage/PatientHomepage';

function App() {
  return (
    <div className="App">
{/*     <LandingPage /> */}
      <PatientHomepage/>
    </div>
  );
}

export default App;
