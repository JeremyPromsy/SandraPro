import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"
import logo from "../assets/VPA-Logo.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footerHaut">
            <div className="footerGauche">
                <NavLink to="/">
                    <img className="logoFooter" src= {logo} alt ="logo LaFamicale" /> 
                </NavLink>
            </div>
            <div className="footerMilieu">
                <ul className="navLinksFooterMid"> 
                    Pages
                    <li className="nav-links-footer nav-links-footer1">
                    <NavLink to="/Gestion">Gestion</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer2">
                    <NavLink to="/financier">Financier</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer3">
                    <NavLink to="/immobilier">Immobilier</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer4">
                    <NavLink to="/art-thérapie">Art-Thérapie</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer5">
                    <NavLink to="/informations">Me connaitre</NavLink>
                    </li>
                </ul>
            </div>
            <div className="footerDroit">
                <div className="nav-linksFooter">
                    <div className="footerBoutonContact">
                        <button className="nav-links-footer nav-links-footer6">
                            <NavLink to="/contact">Contact</NavLink>
                        </button>
                    </div>
                    <div className="footerBoutonLinkedin">
                        <button className="nav-links-footer nav-links-footer7">
                            <NavLink to="/contact">Contact</NavLink>
                        </button>
                    </div>
                    <div className="footerMentions">
                        <Link to="/mentionslégales">Mentions Légales</Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="footerBas">
                VPA by Sandra - © 2024 Tous droits réservés
            </div>
        </div>
    )
}

export default Footer;