import React from "react";
import "../styles/financier.css"
import imgFinance from "../assets/VPA-Finance.jpg";
import SavoirPlus from '../components/SavoirPlus.jsx';
import Description from "../components/Description";

function Financier() {
    return (
        <div className="pageFinancier">
          <div className="encadrementImg">
          <div className="imageFinancier">
            <img className="imgFinancierInt" src={imgFinance} alt="logo VPA - Finance" />
          </div>
          </div>
        <h1>Financier</h1>
        <Description className="desc desc1" title = {"Accompagnement au quotidien"} 
                    content ={
                    <p>Accompagnement dans les relations avec les établissements financiers et les organismes légaux
                    <br></br>
                    </p>
                    } />
        <Description className="desc desc1" title = {"Valorisation de votre patrimoine"} 
                    content ={
                    <p>Réflexion sur la structuration, par recours éventuel à la dette, et suivi des placements financiers selon les besoins du client (train de vie, frais, budget pluri annuel, volonté d’organiser sa succession).
                    <br></br>
                    </p>
                    } />
        <div className="lienEnSavoirPlus">
            < SavoirPlus/>         
          </div>
      </div>
    );
  }
  
  export default Financier;