import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserRoleProvider } from "./components/UserRoleContext/UserRoleContext";
import "./App.css";
import LandingPage from "./routes/shared/LandingPage/LandingPage";
import Login from "./routes/shared/Login/Login";
import Journal from "./routes/shared/Journal/Journal";
import Prescriptions from "./routes/shared/Prescriptions/Prescriptions";
import TestResults from "./routes/shared/TestResults/TestResults";
import UserProfile from "./routes/shared/UserProfile/UserProfile";
import HpHomepage from "./routes/healthcare_provider/HpHomepage/HpHomepage";
import PatientProfile from "./routes/healthcare_provider/PatientProfile/PatientProfile";
import PatientRecords from "./routes/healthcare_provider/PatientRecords/PatientRecords";
import PatientHomepage from "./routes/patient/PatientHomepage/PatientHomepage";
import Header from "./components/layout/Header/Header";
import NavBar from "./components/layout/NavBar/NavBar";
import "./reset.css";
import "./App.css";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <div className="App">
       <UserRoleProvider>
      <Header />
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
        <Route path="/hp/patient-records" element={<PatientRecords />} />
        <Route path="/hp/patient-profile" element={<PatientProfile />} />

        {/* Patient Routes */}
        <Route path="/patient/homepage" element={<PatientHomepage />} />
      </Routes>
      {/* Render the navbar if it is not on landingpage */}
      {!isLandingPage && <NavBar />}
      </UserRoleProvider>
    </div>
  );
}

export default App;
