import React from "react";
import "../styles/art.css"
import imgArt from "../assets/VPA-Art.jpg";
import SavoirPlus from '../components/SavoirPlus.jsx'; 
import Description from "../components/Description";

function Art() {
    return (
        <div className="pageArt">
          <div className="encadrementImg">
          <div className="imageArt">
            <img className="imgArtInt" src={imgArt} alt="logo VPA - Art"  />
          </div>
          </div>
        <h1>Art-Thérapie</h1>
        <Description className="desc desc1" title = {"Aide"} 
                    content ={
                    <p>
                    <br></br>
                    </p>
                    } />
        <div className="lienEnSavoirPlus">
            < SavoirPlus/>         
          </div>
      </div>
    );
  }
  
  export default Art;