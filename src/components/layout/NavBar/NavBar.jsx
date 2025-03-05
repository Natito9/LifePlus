/* import NavBarMobile from "./NavBarMobile";
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

export default NavBar; */


import useScreenSize from "../../../Hooks/useScreenSize";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";


function HpHomepage() {
   const isMobile = useScreenSize();

   return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}

export default HpHomepage;
