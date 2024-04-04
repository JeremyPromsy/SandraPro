import React from "react";
import "../styles/gestion.css"
import imgGestion from "../assets/VPA-Gestion.jpg";
import SavoirPlus from '../components/SavoirPlus.jsx'

function Gestion() {
    return (
      <div className="pageGestion">
        <div className="encadrementImg">
        <div className="imageGestion">
        <img className="imgGestionInt" src={imgGestion} alt="logo VPA - Gestion" />
        </div>
        </div>
        <h1>Gestion</h1>
        <p>
            Relation avec les administrations, assistance aux formalités fiscales et légales.<br/>
            Gestion administrative (règlement des factures, gestion des abonnements),<br/>
            Gestion événementielle (mariages, concerts, ….)<br/>
            Organisation Voyages et déplacements<br/>
            Organisations de la dépendance (assistance à domicile et/ou suivi de la relation avec les organismes de placements - foyers adultes handicapés, maisons de retraite, EPHAD),<br/>
            Selon la nature de la dépendance, cette prestation peut s’inscrire dans un statut légal de Tuteur ou Curateur<br/>
            Accompagnement pour les formalités médicales<br/>
        </p>
          <div className="lienEnSavoirPlus">
            < SavoirPlus/>         
          </div>
      </div>
    );
  }
  
  export default Gestion;