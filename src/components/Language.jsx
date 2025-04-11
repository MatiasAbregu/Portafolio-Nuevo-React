import React from "react";
import '../styles/Language.css';

export const Language = ({idioma, setIdioma}) => {

    return (
        <div className="languageDiv">
            <img src="https://flagcdn.com/ar.svg" className={idioma == "espanol" ? "active" : ""} onClick={() => setIdioma("ingles")} />
            <img src="https://flagcdn.com/us.svg" className={idioma == "ingles" ? "active" : ""} onClick={() => setIdioma("espanol")} />
        </div>
    );
}