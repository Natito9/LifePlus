import patientProfileAvatar from "../../../assets/icons/patient-header-profile-icon.svg";
import { useState } from "react";
import NavBarDesktopModal from "../../layout/NavBar/NavBarDesktopModal/NavBarDesktopModal";
import "./NavBarProfileAvatar.css"

function HeaderProfileIconPatient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };


    return (
        <div className="profileAvatar">
            <img
                src={patientProfileAvatar} alt="Patient's profile rounded pic" width={60} height={60}
                onClick={handleToggleModal}
                
            />
            {isModalOpen && <NavBarDesktopModal closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default HeaderProfileIconPatient;