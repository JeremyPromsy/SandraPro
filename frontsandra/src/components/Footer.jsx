import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"
import logo from "../assets/VPA-Logo.png"

function Footer() {
    return (
        <div className="footer">
                <NavLink to="/">
                    <img className="logoFooter" 
                    src= {logo} 
                    alt ="logo LaFamicale" /> 
                </NavLink>
            <div className="nav-linksFooter">
                <Link to="/mentionslégales">Mentions Légales</Link>
            </div>
        </div>
    )
}

export default Footer;