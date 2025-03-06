import React from "react";
import "./NavBarDesktopModal.css";
import profileIcon from "../../../../assets/icons/profile.svg";
import logOutIcon from "../../../../assets/icons/logOut.svg";
import { useNavigate } from "react-router-dom";

function NavBarDesktopModal({ closeModal }) {
    const navigate = useNavigate();

    return (
        <div className="modalOverlay" onClick={closeModal}>
            <div className="btnNavbarMobileModalContainer">
                <button
                    className="btnMyProfile"
                    onClick={() => {
                        navigate("/user-profile");
                        closeModal();
                    }}>
                    My profile
                    <img src={profileIcon} alt="Profile Icon" />
                </button>

                <button className="btnLogOut" onClick={() => {
                    navigate("/");
                    closeModal();
                }}>
                    Log out
                    <img src={logOutIcon} alt="Log Out Icon" />
                </button>
            </div>
        </div>
    );
}

export default NavBarDesktopModal;