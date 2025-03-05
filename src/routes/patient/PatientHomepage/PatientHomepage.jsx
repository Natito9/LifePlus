import "./PatientHomepage.css";
import homeIcon from "../../../assets/icons/home.svg";
import ButtonsPatientHomepage from "../../../components/ui/ButtonsPatientHomepage/ButtonsPatientHomepage";
import NavBarMobileModal from "../../../components/layout/NavBar/NavBarMobileModal/NavBarMobileModal";

function PatientHomepage() {
  return (
    <div className="patientHomepageContainer">
      <header className="headerPatient">
        <img src={homeIcon} alt="HomeIcon" className="homeIcon" />
        <div className="patientHeader">
          <h1 className="patientName">Tom Cruise</h1>
          <p className="patientId">Patient ID : 357321</p>
        </div>
      </header>
      <ButtonsPatientHomepage />
      <NavBarMobileModal />
    </div>
  );
}

export default PatientHomepage;
