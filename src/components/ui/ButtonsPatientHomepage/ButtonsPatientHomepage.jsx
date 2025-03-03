import "./ButtonsPatientHomepage.css";
import journalIcon from "../../../assets/icons/journal.svg";
import testResultsIcon from "../../../assets/icons/testResults.svg";
import prescriptionsIcon from "../../../assets/icons/prescriptions.svg";

function ButtonsPatientHomepage() {
  return (

    //onClick navigate to...
    <div className="btnsPHomepageContainer">
      <button className="btnJournal">
        <img src={journalIcon} alt="Journal Icon" />
        My Journal
      </button>
      <button className="btnTestResults">
      <img src={testResultsIcon} alt="Test results Icon" />
        Test results</button>
      <button className="btnPrescriptions">
      <img src={prescriptionsIcon} alt="Prescriptions Icon" />
        Prescriptions</button>
    </div>
  );
}

export default ButtonsPatientHomepage;
