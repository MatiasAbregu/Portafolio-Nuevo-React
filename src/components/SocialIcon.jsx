import React from "react";

export const SocialIcon = ({iconoNombre, children, direccion}) => {
    return(
        <a href={direccion} target="_blank">
            <i className={"bi " + iconoNombre}></i>
            <p>{children}</p>
        </a>
    );
}