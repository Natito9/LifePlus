import homeIcon from "../../../assets/icons/home.svg";
import moreIcon from "../../../assets/icons/dotsVerticalMore.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import "./NavBarMobile.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useUserRole();

  const isHomepageActive = location.pathname === "/patient/homepage" || location.pathname === "/hp/homepage";

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

          <button className="btn moreNav">
            {/* onclick open menu */}
            <img src={moreIcon} alt="More Icon" className="moreNavIcon" />
            More
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

          <button className="btn moreNav">
            {/* onclick open menu */}
            <img src={moreIcon} alt="More Icon" className="moreNavIcon" />
            More
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
