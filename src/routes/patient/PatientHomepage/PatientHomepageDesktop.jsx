import { useUserRole } from "../../../components/UserRoleContext/UserRoleContext";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import PatientDesktopFooter from "../../../components/layout/Footer/PatientDesktopFooter";
import journalIcon from "../../../assets/icons/journal-header.svg";
import journalNotepad from "../../../assets/icons/journal-sidebar.svg";
import testResults from "../../../assets/icons/test-results-sidebar.svg";
import prescriptions from "../../../assets/icons/prescription-sidebar.svg";
import profile from "../../../assets/icons/profile-sidebar.svg";
import dropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import "./PatientHomepageDesktop.css";

function PatientHomepageDesktop() {
    const { userRole, setUserRole } = useUserRole();

    useEffect(() => {
        if (userRole !== "patient") {
            setUserRole("patient");
        }
    }, [userRole, setUserRole])

    return (
        <>
            <div className="homepageDesktopGrid">
                <nav className="patientHomeLinkContainer">
                    <Link to="/patient/homepage" className="patientHomeLink">Home</Link>
                </nav>

                <header className="patientHomepageDesktopHeader">
                    <img src={journalIcon} alt="Journal Icon" />
                    <h2 className="h2Desktop">Journal</h2>
                </header>
                <aside className="patientDesktopSidebar">
                    <div className="sidebarRow">
                        <div className="iconContainer">
                            <img src={journalNotepad} alt="Journal icon represented as a notepad" />
                        </div>
                        <p>Journal</p>
                    </div>
                    <div className="sidebarRow">
                        <div className="iconContainer">
                            <img src={testResults} alt="Journal icon represented as a notepad" />
                        </div>
                        <p>Test Restults</p>
                    </div>
                    <div className="sidebarRow">
                        <div className="iconContainer">
                            <img src={prescriptions} alt="Journal icon represented as a notepad" />
                        </div>
                        <p>Prescriptions</p>
                    </div>
                    <div className="sidebarRow">
                        <div className="iconContainer">
                            <img src={profile} alt="Journal icon represented as a notepad" />
                        </div>
                        <p>My Profile</p>
                    </div>
                </aside>
                <main className="patientHomepageMainContainer">
                    <div className="testResultsDropdown">
                        <p>Today</p>
                        <p>Stockholm Hospital</p>
                        <img src={dropdownArrow} alt="An arrow pointing down, to open the document as a dropdown" />
                    </div>
                    <div className="testResultsDropdown">
                        <p>Today</p>
                        <p>Stockholm Hospital</p>
                        <img src={dropdownArrow} alt="An arrow pointing down, to open the document as a dropdown" />
                    </div>
                    <div className="testResultsDropdown">
                        <p>Today</p>
                        <p>Stockholm Hospital</p>
                        <img src={dropdownArrow} alt="An arrow pointing down, to open the document as a dropdown" />
                    </div>
                    <div className="testResultsDropdown">
                        <p>Today</p>
                        <p>Stockholm Hospital</p>
                        <img src={dropdownArrow} alt="An arrow pointing down, to open the document as a dropdown" />
                    </div>
                </main>
            </div>
            <PatientDesktopFooter />
        </>
    )
}

export default PatientHomepageDesktop;