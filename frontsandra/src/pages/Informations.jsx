import React from "react";
import Description from "../components/Description";
import "../styles/informations.css"
import SavoirPlus from '../components/SavoirPlus.jsx';

function Infos () {
    return (
            <div className="info">
                <div className="infosTitre">
                    <h1>L'histoire de VPA ainsi que la mienne</h1>
                </div>
                <div className="contentDescription">
                    <Description className="desc desc1" title = {"Experience"} 
                    content ={
                    <p>Toute ma carrière faite dans la banque a été riche d’expériences dans différents métiers : assistance de l’Exécutif, financements spécialisés, responsable Middle Back office dans la gestion de fortune.
                    <br></br>
                    En 2011, j’ai évolué vers le métier de Banquier Privé que j’ai occupé pendant 11 années durant lesquelles j’ai pu apprécier la relation client faite dans la durée, la confiance, l’accompagnement familiale.
                    <br></br>
                    Très à l’aise dans la relation client, mes compétences techniques au service d’une gestion personnalisée, humaine et durable sont des qualités appréciées.
                    </p>
                    } />
                    <Description className="desc desc2" title = {"L’origine de VPA by Sandra"} 
                    content ={
                    <p>Après plusieurs années consacrées à l’accompagnement de mes clients dans la gestion de fortune, je m’oriente aujourd’hui vers une approche plus indépendante tournée vers l’humain et la personnalisation des conseils.
                    <br></br>
                    Dans le métier que j’ai exercé, j’ai été particulièrement sensible au manque d’accompagnement des personnes âgées ou fragilisées perdant progressivement leur autonomie physique ou mentale. Je ressens le besoin certain d’y apporter des solutions et une réelle vocation.
                    <br></br>
                    Ce conseil personnalisé se tourne également vers les familles ayant besoin de cohésion dans leur gestion, n’ayant pas le temps ou les compétences nécessaires pour une approche à la fois globale et personnelle pour gérer leurs affaires.
                    <br></br>
                    Dans une société tournée vers des solutions digitales de plus en plus présentes dans notre quotidien et qui laissent peu de place à l’écoute, j’offre mes services et vous accompagne dans votre gestion quotidienne : administrative, financière et immobilière.
                    <br></br>
                    Souvent source de stress et de perte de temps voire d’erreur de gestion, l’accompagnement que je propose est une alternative à la digitalisation. Nos échanges se basent sur la connaissance, la compréhension de vos besoins et la confiance pour vous permettre d’avancer sereinement dans vos projets.
                    </p>
                    } /> 
                </div>
                <div className="lienEnSavoirPlus">
                    < SavoirPlus/>         
                </div>
        </div>
    )
}

export default Infos;