import React from "react";
import "../styles/home.css"
import { NavLink } from "react-router-dom";
import imgArt from "../assets/VPA-Art.jpg";
import imgFinance from "../assets/VPA-Finance.jpg";
import imgGestion from "../assets/VPA-Gestion.jpg";
import imgImmo from "../assets/VPA-immobilier.jpg";

function Home () {
    return (
        <div className="home">
            <h1>Découvrez VPA : Votre patrimoine autrement</h1>
                <div className="presentation">
                    <h2>Mes préstations</h2>
                    <div className="presentationActivite">
                    <div className="gestion presInd">
                        <NavLink to="/gestion">
                            <div className="titrePres">
                            <img className="imgMenu" src={imgGestion} alt="logo VPA - Gestion" />
                            <h3>Gestion</h3>
                            </div>
                            <p>Pour vous aider au quotidien dans toutes les tâches administratives et personnelles.</p>
                        </NavLink>
                    </div>
                    <div className="financier presInd">
                        <NavLink to="/financier">
                            <div className="titrePres">
                            <img className="imgMenu" src={imgFinance} alt="logo VPA - Financier" />
                            <h3>Financier</h3>
                            </div>
                            <p>Accompagnement adapté avec vos établissements bancaires</p>
                        </NavLink>
                    </div>
                    <div className="immobilier presInd">
                        <NavLink to="/immobilier">
                            <div className="titrePres">
                            <img className="imgMenu" src={imgImmo} alt="logo VPA - Immobilier" />
                            <h3>Immobilier</h3>
                            </div>
                            <p>Structuration, gestion et recherche pour votre patrimoine immobilier</p>
                        </NavLink>
                    </div>
                    <div className="art presInd">
                        <NavLink to="/art-thérapie">   
                            <div className="titrePres">
                            <img className="imgMenu" src={imgArt} alt="logo VPA - Art" />  
                            <h3>Art-thérapie</h3>
                            </div>
                            <p>Aide grâce à la création artistique de la gestion des traumastismes de vie</p>
                        </NavLink>
                    </div>
                    </div>
                </div>
                <div className="enSavoirPlus">
                    <div className="quiSuisJe">
                        <NavLink to="/informations">
                            <h2>Qui suis-je ?</h2>
                            <p> </p>
                        </NavLink>
                    </div>
                    <div className="contactHome">
                        <NavLink to="/contact">
                            <h2>Contact</h2>
                            <p> </p>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Home;