import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logoNavD from "../assets/VPA-logo-Desktop.png";
import logoNavM from "../assets/VPA-logo-Mobile.png";

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false); 
  };

  return (
    <nav className="header">
      <div className={`navHeader ${showLinks ? "showNav" : "hideNav"}`}>
        <div className="navLogo">
          <div className="navBurger">
          <div className="navGauche">
            <button className="menuIcon" onClick={handleShowLinks}>
              <span className="burgerBar"></span>
            </button>
          </div>
          <div className="logoNav">
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo-img-Desktop" src={logoNavD} alt="logo VPA" />
              <img className="logo-img-Mobile" src={logoNavM} alt="logo VPA" />
            </NavLink>
          </div>
          <div className="navbar">
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
              <li className="nav-links nav-links7">
                  <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </li>
            </ul>
          </div>
          </div>
        <div className="contactNav nav-links nav-links6">
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
