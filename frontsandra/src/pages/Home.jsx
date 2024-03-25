import React from "react";
import "../styles/home.css"
import { NavLink } from "react-router-dom";

function Home () {
    return (
        <div className="home">
            <h1>Découvrez VPA : Votre patrimoine autrement</h1>
                <div className="presentation">
                    <h2>Mes préstations</h2>
                    <div className="presentationActivite">
                    <div className="gestion">
                        <NavLink to="/gestion">
                            <h3>Gestion</h3>
                        </NavLink>
                    </div>
                    <div className="financier">
                        <NavLink to="/financier">
                            <h3>Financier</h3>
                        </NavLink>
                    </div>
                    <div className="immobilier">
                        <NavLink to="/immobilier">
                            <h3>Immobilier</h3>
                        </NavLink>
                    </div>
                    <div className="art">
                        <NavLink to="/art-thérapie">     
                            <h3>Art-thérapie</h3>
                        </NavLink>
                    </div>
                    </div>
                </div>
                <div className="enSavoirPlus">
                    <div className="quiSuisJe">
                        <NavLink to="/informations">
                            <h2>Qui suis-je ?</h2>
                        </NavLink>
                    </div>
                    <div className="contactHome">
                        <NavLink to="/contact">
                            <h2>Contact</h2>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Home;