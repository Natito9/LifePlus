import HeaderProfileIconDoctor from "../../ui/HeaderProfileIcons/HeaderProfileIconDoctor";
import HeaderProfileIconPatient from "../../ui/HeaderProfileIcons/HeaderProfileIconPatient";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import "./NavBarDesktop.css";

function NavBarDesktop() {
    const { userRole } = useUserRole();

    return (
        <header className="doctorsNavbarDesktopContainer">
            <h1 className="logoDesktop">Life +</h1>
            {userRole === "patient" ? (
                <HeaderProfileIconPatient />
            ) : userRole === "provider" ? (
                <HeaderProfileIconDoctor />
            ) : null}
        </header>
    )
}

export default NavBarDesktop;