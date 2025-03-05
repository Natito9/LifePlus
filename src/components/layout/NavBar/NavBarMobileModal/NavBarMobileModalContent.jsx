import React from "react";
import "./NavBarMobileModalContent.css";
import profileIcon from "../../../../assets/icons/profile.svg";
import logOutIcon from "../../../../assets/icons/logOut.svg";
import { useNavigate } from "react-router-dom";

function NavbarMobileModalContent() {
  const navigate = useNavigate();

  return (
    <div className="btnNavbarMobileModalContainer">
      <button
        className="btnMyProfile"
        onClick={() => navigate("/user-profile")}
      >
        My profile
        <img src={profileIcon} alt="Profile Icon" />
      </button>

      <button className="btnLogOut" onClick={() => navigate("/")}>
        Log out
        <img src={logOutIcon} alt="Log Out Icon" />
      </button>
    </div>
  );
}

export default NavbarMobileModalContent;
