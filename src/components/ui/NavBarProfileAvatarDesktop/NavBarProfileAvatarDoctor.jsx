import doctorProfileAvatar from "../../../assets/icons/doctor-header-profile-icon.svg";
import NavBarDesktopModal from "../../layout/NavBar/NavBarDesktopModal/NavBarDesktopModal";
import { useState } from "react";
import "./NavBarProfileAvatar.css"

function HeaderProfileIconDoctor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };
    return (
        <div className="profileAvatar">
            <img src={doctorProfileAvatar} alt="Doctor's profile avatar rounded" width={60} height={60}
                onClick={handleToggleModal}
            />
            {isModalOpen && <NavBarDesktopModal closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default HeaderProfileIconDoctor;