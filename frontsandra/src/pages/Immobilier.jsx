import React from "react";
import "../styles/immobilier.css"
import imgImmo from "../assets/VPA-immobilier.jpg";

function Immobilier() {
    return (
        <div className="pageImmobilier">
          <div className="encadrementImg">
          <div className="imageImmobilier">
            <img className="imgImmobilierInt" src={imgImmo} alt="logo VPA - Immobilier" />
          </div>
          </div>
          
        <h1>Immobilier</h1>
        <p>
            Assistance aux formalités liées à la résidence principale et secondaire<br/>
            Possible intervention dans la gestion de l’entretien du patrimoine immobilier (suivi des travaux, relation avec les syndics,…)<br/>
            Recherche (avec les professionnels immobiliers) et structuration des acquisitions immobilières<br/>
            Travaux de restructuration : Relation avec architectes, appels d'offres, suivi des chantiers, assistance au choix des matériaux et décoration, etc…<br/>
            Conciergerie
        </p>
      </div>
    );
  }
  
  export default Immobilier;