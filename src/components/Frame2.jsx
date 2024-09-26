import React from "react";
import { SkillIcon2 } from "./SkillIcon2";

export const Frame2 = ({ img, children, herramientas, funcionModal, contenido, estrella }) => {

    let herramientasEtiq;
    let nombre = children.replaceAll(" ", "").replaceAll("á", "a").replaceAll(/[!#$%&/()=?¡¿-]/g, "");

    if (herramientas) {
        herramientasEtiq = herramientas.map(h => <SkillIcon2 img={h[0]} nivel={h[1]}></SkillIcon2>)
    }

    return (
        <div className={`cajaProyecto ${estrella ? "estrella" : ""}`} id={nombre} onClick={() => funcionModal(contenido)}>
            <div className="contenedorImgP">
                <img src={img} alt="" className="proyectoImg" />
                <div className="cajaHerramientas">
                    {herramientasEtiq}
                </div>
            </div>
            <p>{children}</p>
        </div>
    );
}