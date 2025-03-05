import useScreenSize from "../../../Hooks/useScreenSize";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";

// HpHomepage changed to NavBar
function NavBar() {
   const isMobile = useScreenSize();

   return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}

export default NavBar;
