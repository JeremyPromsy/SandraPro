import "../styles/description.css";
import React from 'react';

function Description({ title, content}) {
    return (
        <div className="infosDesc">
            <div className="container">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Description;