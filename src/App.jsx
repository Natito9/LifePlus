import "./reset.css"
import './App.css';
import React from 'react';
import Navbar from "./components/layout/NavBar/NavBar";
// import PatientHomepage from './routes/patient/PatientHomepage/PatientHomepage';
import HpHomepage from "./routes/healthcare_provider/HpHomepage/HpHomepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Shared Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/test-results" element={<TestResults />} />
        <Route path="/prescriptions" element={<Prescriptions />} />

        {/* Healthcare Provider Routes */}
        <Route path="/hp/homepage" element={<HpHomepage />} />
        <Route path="/hp/patient-records" element={<PatientRecords/>} />
        <Route path="/hp/patient-profile" element={<PatientProfile />} />

         {/* Patient Routes */}
         <Route path="/patient/homepage" element={<PatientHomepage/>} />
      </Routes>
      {/* <PatientHomepage/> */}
      <HpHomepage/>
      <Navbar/>
    </div>
  );
}

export default App;
