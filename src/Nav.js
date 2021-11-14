import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
