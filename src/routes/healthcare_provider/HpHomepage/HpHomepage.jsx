import useScreenSize from "../../../Hooks/useScreenSize";
import HpHomepageMobile from "./HpHomepageMobile";
import HpHomepageDesktop from "./HpHomepageDesktop";


function HpHomepage() {
   const isMobile = useScreenSize();

   return isMobile ? <HpHomepageMobile /> : <HpHomepageDesktop />;
}

export default HpHomepage;
