import "../styles/description.css";
import React, { useState } from 'react';
import haut from "../assets/FlècheBas.png";
import bas from "../assets/FlecheHaut.png";

function Description({ title, content, open }) {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const displayContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        }
        return <p>{content}</p>;
    };

    return (
        <div className="infos">
                <div className={isOpen ? "collapseFermé" : "collapseOuvert"}>
                <div className="containerDesc">
                <h3>{title}</h3>
                <img
                    className={isOpen ? "FlècheBasse" : "FlècheHaute"} 
                    src={isOpen ? bas : haut} 
                    alt={isOpen ? "contenu caché" : "contenu affiché"}
                    onClick={toggleOpen}
                />
                </div>
            {isOpen && (
                <div> {displayContent()} </div>
            )}
            </div>
        </div>
    );
}

export default Description;