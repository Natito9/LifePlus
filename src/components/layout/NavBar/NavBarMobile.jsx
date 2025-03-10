import homeIcon from "../../../assets/icons/home.svg";
import moreIcon from "../../../assets/icons/dotsVerticalMore.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import NavBarMobileModal from "./NavBarMobileModal/NavBarMobileModal";
import NavbarMobileModalContent from "./NavBarMobileModal/NavBarMobileModalContent";
import "./NavBarMobile.css";
import { useState } from "react";

const NavBarMobile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useUserRole();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isHomepageActive =
    location.pathname === "/patient/homepage" ||
    location.pathname === "/hp/homepage";

  return (
    <nav className="navbar">
      {userRole === "patient" ? (
        <>
          <button
            className={`btn homeNav ${isHomepageActive ? "active" : ""}`}
            onClick={() => navigate("/patient/homepage")}
          >
            <img src={homeIcon} alt="Home Icon" className="homeNavIcon" />
            Home
          </button>
        </>
      ) : (
        <>
          <button
            className={`btn homeNav ${isHomepageActive ? "active" : ""}`}
            onClick={() => navigate("/hp/homepage")}
          >
            <img src={homeIcon} alt="Home Icon" className="homeNavIcon" />
            Home
          </button>
        </>
      )}
      <button className="btn moreNav" onClick={toggleModal}>
        <img src={moreIcon} alt="More Icon" className="moreNavIcon" />
        More
        {/* Pass'closeModal' as props to <NavbarMobileModalContent/> through <NavBarMobileModal/> */}
        <NavBarMobileModal isOpen={isModalOpen} onClose={closeModal}>
          <NavbarMobileModalContent onClose={closeModal} />
        </NavBarMobileModal>
      </button>
    </nav>
  );
};

export default NavBarMobile;
