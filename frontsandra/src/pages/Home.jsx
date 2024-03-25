import React from "react";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
            <h1>Découvrez VPA : Votre patrimoine autrement</h1>
                <div className="presentation">
                    <h2>Mes préstations</h2>
                    <div className="gestion">
                        <h3>Gestion</h3>
                    </div>
                    <div className="financier">
                        <h3>Finacier</h3>
                    </div>
                    <div className="immobilier">
                        <h3>Immobilier</h3>
                    </div>
                    <div className="art">
                        <h3>Art-thérapie</h3>
                    </div>
                </div>
                <div className="quiSuisJe">
                    <h2>Qui suis-je ?</h2>
                </div>
                <div className="contactHome">
                    <h2>Contact</h2>
                </div>
        </div>
    )
}

export default Home;