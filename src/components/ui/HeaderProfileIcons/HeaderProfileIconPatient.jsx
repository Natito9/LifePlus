import patientProfileIcon from "../../../assets/icons/patient-header-profile-icon.svg";
import { useState } from "react";
import NavBarDesktopModal from "../../layout/NavBar/NavBarDesktopModal/NavBarDesktopModal";

function HeaderProfileIconPatient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <img
                src={patientProfileIcon} alt="Patient's profile rounded pic" width={60} height={60}
                onClick={() => setIsModalOpen(!isModalOpen)}
            />
            {isModalOpen && <NavBarDesktopModal closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default HeaderProfileIconPatient;