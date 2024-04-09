import React from "react";
import "../styles/immobilier.css"
import imgImmo from "../assets/VPA-immobilier.jpg";
import SavoirPlus from '../components/SavoirPlus.jsx';
import Description from "../components/Description";

function Immobilier() {
    return (
        <div className="pageImmobilier">
          <div className="encadrementImg">
          <div className="imageImmobilier">
            <img className="imgImmobilierInt" src={imgImmo} alt="VPA - Immobilier" />
          </div>
          </div>
        <h1>Immobilier</h1>
        <Description className="desc desc1" title = {"Quotidien Immobilier"} 
                    content ={
                    <p> Conciergerie
                    <br></br>Assistance aux formalités liées à la résidence principale et secondaire
                    </p>
                    } />
        <Description className="desc desc1" title = {"Amélioration"} 
                    content ={
                    <p> Possible intervention dans la gestion de l’entretien du patrimoine immobilier (suivi des travaux, relation avec les syndics,…)
                    <br></br> Travaux de restructuration : Relation avec architectes, appels d'offres, suivi des chantiers, assistance au choix des matériaux et décoration, etc…
                    </p>
                    } />
        <Description className="desc desc1" title = {"Recheche"} 
                    content ={
                    <p> Recherche (avec les professionnels immobiliers) et structuration des acquisitions immobilières
                    <br></br>
                    </p>
                    } />
        <div className="lienEnSavoirPlus">
            < SavoirPlus/>         
          </div>
      </div>
    );
  }
  
  export default Immobilier;