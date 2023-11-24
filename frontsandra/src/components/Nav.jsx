import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logo from "../assets/LOGO-famicale1-01.png"

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false); 
  };

  return (
    <div className="navigation">
    <div className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <div className="logo">
        <NavLink to="/">
          <img className="logo-img" src={logo} 
          alt="logo LaFamicale" />
        </NavLink>
      </div>
      <div className="navBurger">
      <button className="menuIcon" onClick={handleShowLinks}>
        <span className="burgerBar"></span>
      </button>
      </div>
      <ul className="classNav">
        <li className="nav-links nav-links1">
          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>
        </li>
        <li className="nav-links nav-links2">
          <NavLink to="/informations" onClick={closeMenu}>
            Informations
          </NavLink>
        </li>
        <li className="nav-links nav-links3">
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="trouNav"></div>
    </div>
  );
}

export default Navbar;