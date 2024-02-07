import React from "react";
import { SkillIcon } from './SkillIcon';

export const Frame = ({children, iconos})=>{
    
    let listaIconos;
    if(iconos) listaIconos = iconos.map(icono => <SkillIcon img={icono[1]} nivel={icono[2]}>{icono[0]}</SkillIcon>)

    return(
        <fieldset className="frameBorde">
          <legend>{children}</legend>
          {listaIconos} 
        </fieldset>
    );
}