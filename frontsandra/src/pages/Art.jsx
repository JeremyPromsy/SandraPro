import React from "react";
import "../styles/art.css"
import imgArt from "../assets/VPA-Art.jpg";

function Art() {
    return (
        <div className="pageArt">
          <div className="encadrementImg">
          <div className="imageArt">
            <img className="imgArtInt" src={imgArt} alt="logo VPA - Art"  />
          </div>
          </div>
        <h1>Art-Thérapie</h1>
        <p>
        <br/>
        </p>
      </div>
    );
  }
  
  export default Art;