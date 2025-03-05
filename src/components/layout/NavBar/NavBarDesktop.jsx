import HeaderProfileIconDoctor from "../../ui/HeaderProfileIcons/HeaderProfileIconDoctor";
import HeaderProfileIconPatient from "../../ui/HeaderProfileIcons/HeaderProfileIconPatient";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import "./NavBarDesktop.css";

function NavBarDesktop() {
    const { userRole } = useUserRole();

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
        </div>
    )
}

export default NavBarDesktop;