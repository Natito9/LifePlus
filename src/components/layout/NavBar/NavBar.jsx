import homeIcon from "../../../assets/icons/home.svg";
import moreIcon from "../../../assets/icons/dotsVerticalMore.svg";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="btn homeNav">
        <img src={homeIcon} alt="Home Icon" className="homeNavIcon"/>
        Home
      </button>
      <button className="btn moreNav">
        <img src={moreIcon} alt="More Icon" className="moreNavIcon"/>
        More
      </button>
    </nav>
  );
};

export default Navbar;
