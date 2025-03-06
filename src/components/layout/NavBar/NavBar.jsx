import useScreenSize from "../../../Hooks/useScreenSize";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";


function HpHomepage() {
   const isMobile = useScreenSize();

   return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}

export default HpHomepage;
