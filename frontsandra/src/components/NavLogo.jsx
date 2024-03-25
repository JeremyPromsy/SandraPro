import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../assets/VPA-Logo.png";
import "../styles/navlogo.css";


function NavLogo() {

    return (
        <div className="navLogo">
        <div className="logoNav">
            <NavLink to="/">
                    <img className="logo-img" src={logoNav} alt="logo VPA" />
            </NavLink>
        </div>
        </div>
    );
}

export default NavLogo;