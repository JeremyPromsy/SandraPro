import React from "react";
import Description from "../components/Description";
import "../styles/informations.css"

function Infos () {
    return (
            <div className="info">
                <div className="infosTitre">
                    <h1>L'histoire de VPA ainsi que la mienne</h1>
                </div>
                <div className="contentDescription">
                    <Description className="desc desc1" title = {"Mon histoire"} 
                    content ={
                    <p>Maison de 110m2
                    <br></br>3 chambres  
                    </p>
                    } />
                    <Description className="desc desc2" title = {"Mes diplômes"} 
                    content ={
                    <p>Deux terrasses
                    <br></br>Une pergola
                    </p>
                    } /> 
                </div>
        </div>
    )
}

export default Infos;