import React from 'react';
import './LandingPage.css';
import bannerSvg from "../../../assets/images/banner.svg";

function LandingPage() {
  return (
    <div>
        <img src={bannerSvg} alt="banner" />
      <h2 className='bold-text'>Welcome to</h2>
      <h1 className='bold-text'>life +</h1>
      <h2 className='medium-text'>Who are you?</h2>
      <button>Patient</button>
      <button>Healthcare provider</button>
      <p>By signing  up or logging in, I accept the apps <em>Terms of service</em> and <em> Privacy policy</em></p>
    </div>
  )
}

export default LandingPage;
