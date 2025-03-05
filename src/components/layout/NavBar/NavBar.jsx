import homeIcon from "../../../assets/icons/home.svg";
import moreIcon from "../../../assets/icons/dotsVerticalMore.svg";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "../../UserRoleContext/UserRoleContext";
import "./NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { userRole } = useUserRole();

  return (
    <nav className="navbar">
      {userRole === "patient" ? (
        <>
          <button
            className="btn homeNav"
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
            className="btn homeNav"
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

export default Navbar;
