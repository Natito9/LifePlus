import HeaderProfileIconDoctor from "../../ui/NavBarProfileAvatarDesktop/NavBarProfileAvatarDoctor";
import HeaderProfileIconPatient from "../../ui/NavBarProfileAvatarDesktop/NavBarProfileAvatarPatient";
import NavBarDesktopModal from "./NavBarDesktopModal/NavBarDesktopModal";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import { useState } from "react";
import "./NavBarDesktop.css";

function NavBarDesktop() {
    const { userRole } = useUserRole();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="homepageDesktopWrap">
            <div className="navbarDesktopContainer">
                <h1 className="logoDesktop">Life +</h1>
                {userRole === "patient" ? (
                    <HeaderProfileIconPatient />
                ) : userRole === "provider" ? (
                    <HeaderProfileIconDoctor />
                ) : null}
            </div>
            {isModalOpen && <NavBarDesktopModal closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default NavBarDesktop;