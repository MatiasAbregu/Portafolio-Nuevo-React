import React from "react";

export const NavIcon = ({posicionDePag, iconoNombre, contenidoNom}) => {
    return(
        <a href={posicionDePag}>
            <i className={"bi " + iconoNombre + " iconosNav"}></i>
            <p>{contenidoNom}</p>
        </a>
    );
}