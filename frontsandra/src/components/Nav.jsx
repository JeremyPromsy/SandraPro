import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logoNav from "../assets/VPA-Logo.png";

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false); // Ferme le menu lorsqu'un NavLink est cliqué
  };

  return (
    <nav className="header">
      <div className="navHeader">
        <div className="navLogo">
          <div className="navBurger">
          <div className="navGauche">
            <button className="menuIcon" onClick={handleShowLinks}>
              <span className="burgerBar"></span>
            </button>
          </div>
          <div className="logoNav">
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo-img" src={logoNav} alt="logo VPA" />
            </NavLink>
          </div>
          <div className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
            <ul className="classNav">
              <li className="nav-links nav-links0">
                <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
              </li>
              <li className="nav-links nav-links1">
                <NavLink to="/Gestion" onClick={closeMenu}>Gestion</NavLink>
              </li>
              <li className="nav-links nav-links2">
                <NavLink to="/financier" onClick={closeMenu}>Financier</NavLink>
              </li>
              <li className="nav-links nav-links3">
                <NavLink to="/immobilier" onClick={closeMenu}>Immobilier</NavLink>
              </li>
              <li className="nav-links nav-links4">
                <NavLink to="/art-thérapie" onClick={closeMenu}>Art-Thérapie</NavLink>
              </li>
              <li className="nav-links nav-links5">
                <NavLink to="/informations" onClick={closeMenu}>Me connaitre</NavLink>
              </li>
            </ul>
          </div>
          </div>
        <div className="contactNav">
          <button className="nav-links nav-links6">
            <NavLink to="/contact">Contact</NavLink>
          </button>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
