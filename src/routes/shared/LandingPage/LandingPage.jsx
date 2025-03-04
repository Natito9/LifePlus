import React from 'react';
import { useUserRole } from '../../../components/UserRoleContext/UserRoleContext';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import bannerSvg from "../../../assets/images/banner.svg";

function LandingPage() {
 const { setUserRole } = useUserRole();
 const navigate = useNavigate();

  return (
    <div className="landingPageContainer">
        <img className="landingBanner" src={bannerSvg} alt="banner" />
      <h2 className="welcomeText boldText">Welcome to</h2>
      <h1 className="boldText lifePlusText">life +</h1>
      <h2 className="mediumText questionText" >Who are you?</h2>
      <button className="btnPatient"
      onClick={() => {setUserRole("patient"); 
        navigate("/login");
      }}
      >Patient</button>
      <button className="btnHp"
       onClick={() => {setUserRole("provider");
        navigate("/login");
       }}>Healthcare provider</button>
      <p className="termsAcceptance">By signing  up or logging in, I accept the apps <em>Terms of service</em> and <em> Privacy policy</em></p>
    </div>
  )
}

export default LandingPage;
