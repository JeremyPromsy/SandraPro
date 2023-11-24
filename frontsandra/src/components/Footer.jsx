import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"

function Footer() {
    return (
        <div className="footer">
                <NavLink to="/">
                    <img className="logoFooter" 
                    //src= {logoNav} 
                    alt ="logo LaFamicale" /> 
                </NavLink>
            <div className="nav-linksFooter">
                <Link to="/mentionslégales">Mentions Légales</Link>
            </div>
        </div>
    )
}

export default Footer;