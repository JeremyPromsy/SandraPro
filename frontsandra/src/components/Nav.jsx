import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logo from "../assets/VPA-Logo.png";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <nav className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <NavLink to="/">
            <img className="logo-img" src={logo} alt="logo VPA" />
          </NavLink>
          <div className="expand_btn" onClick={toggleSidebar}></div>
        </div>
        <div className="sidebar-links">
          <h2>Menu</h2>
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
          </ul>
          <h2>En savoir plus</h2>
          <ul className="classNav">
            <li className="nav-links nav-links5">
              <NavLink to="/informations">Qui suis-je ?</NavLink>
            </li>
            <li className="nav-links nav-links6">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* Bouton pour réouvrir le menu */}
      {!isSidebarOpen && (
        <div className="reopen-btn" onClick={toggleSidebar}>
          Réouvrir le menu
        </div>
      )}
      <div className="content">
        {/* Contenu principal de votre application */}
      </div>
    </div>
  );
}

export default Navbar;
