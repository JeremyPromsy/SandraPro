import React from "react";
import "../styles/gestion.css"
import imgGestion from "../assets/VPA-Gestion.jpg";
import SavoirPlus from '../components/SavoirPlus.jsx'
import Description from "../components/Description";

function Gestion() {
    return (
      <div className="pageGestion">
        <div className="encadrementImg">
        <div className="imageGestion">
        <img className="imgGestionInt" src={imgGestion} alt="logo VPA - Gestion" />
        </div>
        </div>
        <h1>Gestion</h1>
        <Description className="desc desc1" title = {"Administratif avec VPA"} 
                    content ={
                    <p>Relation avec les administrations, assistance aux formalités fiscales et légales.
                    <br></br>Gestion administrative (règlement des factures, gestion des abonnements)<br/>
                    </p>
                    } />
        <Description className="desc desc1" title = {"Evenementiel avec VPA"} 
                    content ={
                    <p>Gestion événementielle (mariages, concerts, ….)
                    <br></br>Organisation Voyages et déplacements<br/>
                    </p>
                    } />
        <Description className="desc desc1" title = {"Accompagnement du quotidien avec VPA"} 
                    content ={
                    <p>Organisations de la dépendance (assistance à domicile et/ou suivi de la relation avec les organismes de placements - foyers adultes handicapés, maisons de retraite, EPHAD)<br/>
                    <br></br>Selon la nature de la dépendance, cette prestation peut s’inscrire dans un statut légal de Tuteur ou Curateur<br/>
                    <br></br>Accompagnement pour les formalités médicales<br/>
                    </p>
                    } />
          <div className="lienEnSavoirPlus">
            < SavoirPlus/>         
          </div>
      </div>
    );
  }
  
  export default Gestion;