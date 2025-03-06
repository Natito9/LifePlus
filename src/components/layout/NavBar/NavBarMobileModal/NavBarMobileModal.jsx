import React, { useEffect, useRef } from "react";
import "./NavBarMobileModal.css";

function NavBarMobileModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    console.log("Modal isOpen: ", isOpen); 
    if (isOpen) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("handleClickOutside Closing modal is working ");
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen,onClose]);

  return (
    <div>

      <div ref={modalRef} className="navModal" >
        {children}
      </div>
    </div>
  );
}

export default NavBarMobileModal;
