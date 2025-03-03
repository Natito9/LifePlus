import homeIcon from "../../../assets/icons/home.svg";
import moreIcon from "../../../assets/icons/dotsVerticalMore.svg";
// import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button
        className="btn homeNav"
        // onClick={() => navigate("/patient-homepage")}
      >
        <img src={homeIcon} alt="Home Icon" className="homeNavIcon" />
        Home
      </button>

      <button className="btn moreNav">
        {/* onclick open menu */}
        <img src={moreIcon} alt="More Icon" className="moreNavIcon" />
        More
      </button>
    </nav>
  );
};

export default Navbar;
