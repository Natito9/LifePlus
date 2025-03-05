import useScreenSize from "../../../Hooks/useScreenSize";
import PatientHomepageDesktop from "./PatientHomepageDesktop";
import PatientHomepageMobile from "./PatientHomepageMobile";

function PatientHomepage() {
  const isMobile = useScreenSize();
  return isMobile ? <PatientHomepageMobile /> : <PatientHomepageDesktop />
}

export default PatientHomepage;
