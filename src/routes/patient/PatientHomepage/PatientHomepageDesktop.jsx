import NavBarDesktop from "../../../components/layout/NavBar/NavBarDesktop";
import { useUserRole } from "../../../components/UserRoleContext/UserRoleContext";
import { useEffect } from "react";

function PatientHomepageDesktop() {
    const { userRole, setUserRole } = useUserRole();
    
    useEffect(() => {
        if (userRole !== "patient") {
            setUserRole("patient");
        }
    }, [userRole, setUserRole])

    return (
        <div className="hpHomepageDesktopBody">
            <div className="hpHomepageDesktopWrap">
                <NavBarDesktop />
            </div>
        </div>
    )
}

export default PatientHomepageDesktop;