import React from 'react';
import './LandingPage.css';
import bannerSvg from "../../../assets/images/banner.svg";

function LandingPage() {
  return (
    <div className="landingPageContainer">
        <img className="landingBanner" src={bannerSvg} alt="banner" />
      <h2 className="welcomeText boldText">Welcome to</h2>
      <h1 className="boldText lifePlusText">life +</h1>
      <h2 className="mediumText questionText" >Who are you?</h2>
      <button className="btnPatient">Patient</button>
      <button className="btnHp">Healthcare provider</button>
      <p className="termsAcceptance">By signing  up or logging in, I accept the apps <em>Terms of service</em> and <em> Privacy policy</em></p>
    </div>
  )
}

export default LandingPage;
