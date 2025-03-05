import doctorProfilePic from "../../../assets/icons/doctor-profile-pic.svg"
import "./NavBarDesktop.css"

function NavBarDesktop() {
    return (
        <header className="doctorsNavbarDesktopContainer">
            <h1 className="logoDesktop">Life +</h1>
            <img src={doctorProfilePic} alt="Doctor's profile rounded pic" />
        </header>
    )
}

export default NavBarDesktop;