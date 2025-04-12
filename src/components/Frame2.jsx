import React from "react";
import { SkillIcon2 } from "./SkillIcon2";
import { motion } from "framer-motion";

export const Frame2 = ({ img, children, herramientas, funcionModal, contenido, estrella }) => {

    let herramientasEtiq;
    let nombre = children[0].replaceAll(" ", "").replaceAll("á", "a").replaceAll(/[!#$%&/()=?¡¿-]/g, "");

    if (herramientas) {
        herramientasEtiq = herramientas.map((h, i) => <SkillIcon2 img={h[0]} nivel={h[1]} key={i}></SkillIcon2>)
    }

    console.log(typeof children);
    return (
        <motion.div className={`cajaProyecto ${estrella ? "estrella" : ""}`} id={nombre} onClick={() => funcionModal(contenido)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.5, duration: 2 }}>
            <div className="contenedorImgP">
                <img src={img} alt="" className="proyectoImg" />
                <div className="cajaHerramientas">
                    {herramientasEtiq}
                </div>
            </div>
            <p>{children}</p>
        </motion.div>
    );
}