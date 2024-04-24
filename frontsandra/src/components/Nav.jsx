import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logoNav from "../assets/VPA-Logo.png";

function Navbar() {
  return (
    <nav className="header">
      <div className="navHeader">
        <div className="navLogo">
          <div className="navGauche">
            <div className="logoNav">
              <NavLink to="/">
                <img className="logo-img" src={logoNav} alt="logo VPA" />
              </NavLink>
            </div>
            <div className="sidebar-links">
              <ul className="classNav">
                <li className="nav-links nav-links1">
                  <NavLink to="/Gestion">Gestion</NavLink>
                </li>
                <li className="nav-links nav-links2">
                  <NavLink to="/financier">Financier</NavLink>
                </li>
                <li className="nav-links nav-links3">
                  <NavLink to="/immobilier">Immobilier</NavLink>
                </li>
                <li className="nav-links nav-links4">
                  <NavLink to="/art-thérapie">Art-Thérapie</NavLink>
                </li>
                <li className="nav-links nav-links5">
                  <NavLink to="/informations">Me connaitre</NavLink>
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
