import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="NavBar NavBarMobile">
        <NavBarMobile />
      </nav>
      <nav className="NavBar NavBarDesktop">
        <NavBarDesktop />
      </nav>
    </>
  );
}

export default NavBar;
