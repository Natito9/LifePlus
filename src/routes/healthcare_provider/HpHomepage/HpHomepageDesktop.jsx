import NavBarDesktop from "../../../components/layout/NavBar/NavBarDesktop";
import { useUserRole } from "../../../components/UserRoleContext/UserRoleContext";
import { useEffect } from "react";
import "./HpHomepageDesktop.css"

function HpHomepageDesktop() {
    const { userRole, setUserRole } = useUserRole();
    
    useEffect(() => {
        if (userRole !== "provider") {
            setUserRole("provider");
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

export default HpHomepageDesktop;