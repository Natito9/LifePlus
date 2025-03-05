import React from 'react';
import "./PatientProfile.css"
import profileIcon from "../../../assets/icons/profile.svg";
import profilePic from "../../../assets/icons/patient-profile-pic.svg";
import phone from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
import location from "../../../assets/icons/location.svg";

function PatientProfile() {
  return (
    <div id="currentPatientProfile">

      <div className="pageLeftHeader">
        <img src={profileIcon} alt="Profile Icon" className="profileIcon" />
        <p>Current Patient</p>
      </div>

      <header className="pageCenterHeader">
        <img src={profilePic} alt="Patient with rounded green frame" className="profilePic" />
        <div className="patientHeader">
          <h2 className="patientName">Tom Cruise</h2>
          <p className="patientId">Patient ID : 357321</p>
        </div>
      </header>

      <main id="patientProfileMain">
        <div className="patientAllertInfoGrid">

          <div className="patientAllertInfoGridCell">
            <h5>AGE</h5>
            <p>62 years old</p>
          </div>

          <div className="patientAllertInfoGridCell">
            <h5>AGE</h5>
            <p>62 years old</p>
          </div>

          <div className="patientAllertInfoGridCell">
            <h5>AGE</h5>
            <p>62 years old</p>
          </div>

          <div className="patientAllertInfoGridCell">
            <h5>AGE</h5>
            <p>62 years old</p>
          </div>
        </div>

        <div className="patientContactInfoContainer">
          <div className="patientContactInfoRow">
            <img src={phone} alt="Phone Icon" />
            <p>+46 072 2392 323</p>
          </div>

          <div className="patientContactInfoRow">
            <img src={mail} alt="Mail Icon" />
            <p>tomcruise@gmail.com</p>
          </div>

          <div className="patientContactInfoRow">
            <img src={location} alt="Location Icon" />
            <div className="patientContactInfoLocationTexts">
              <p>Drottninggatan 22 </p>
              <p>Stockholm</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PatientProfile
