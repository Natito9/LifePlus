import "./PatientHomepage.css"
import homeIcon from "../../../assets/icons/home.svg"
import ButtonsPatientHomepage from "../../../components/ui/ButtonsPatientHomepage/ButtonsPatientHomepage";

function PatientHomepage () {
    return(
        <div className="PatientHomepageContainer">
            <header className="headerPatient">
            <img src={homeIcon} alt="HomeIcon" className="homeIcon" />
                <div className="PatientHeader">
                    <h1>Tom Cruise</h1>
                    <p>Patient ID : 357321</p>
                </div>
            </header>
            <div>
                <ButtonsPatientHomepage/>
            </div>
            {/* <NavBar/> */}
        </div>

)
}



export default PatientHomepage;
