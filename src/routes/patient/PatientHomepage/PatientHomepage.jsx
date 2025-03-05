import "./PatientHomepage.css";
import useScreenSize from "../../../Hooks/useScreenSize";
import PatientHomepageDesktop from "./PatientHomepageDesktop";
import homeIcon from "../../../assets/icons/home.svg";
import ButtonsPatientHomepage from "../../../components/ui/ButtonsPatientHomepage/ButtonsPatientHomepage";

function PatientHomepage() {
  const isMobile = useScreenSize();
  return (
    isMobile ? 
    <div className="patientHomepageContainer">
      <header className="headerPatient">
        <img src={homeIcon} alt="HomeIcon" className="homeIcon" />
        <div className="patientHeader">
          <h1 className="patientName">Tom Cruise</h1>
          <p className="patientId">Patient ID : 357321</p>
        </div>
      </header>
      <ButtonsPatientHomepage />
    </div>

    : <PatientHomepageDesktop />
  );
}

export default PatientHomepage;
