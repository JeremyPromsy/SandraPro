import React from "react";
import "../styles/savoirplus.css"
import { NavLink } from "react-router-dom";

function SavoirPlus () {
    return (
        <div className="savoirPlus">
                <div className="presentation">
                    <h4>Si vous souhaitez en savoir plus, n'hésitez pas à me contacter.</h4>
                    <div className="buttonSavoirPlus">
                        <NavLink to="/contact">
                            <button></button>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default SavoirPlus;