import React from "react";
import { SkillIcon } from './SkillIcon';
import { motion } from "framer-motion";

export const Frame = ({ children, iconos }) => {

  let listaIconos;
  if (iconos) listaIconos = iconos.map((icono, index) => <SkillIcon img={icono[1]} nivel={icono[2]} key={index}>{icono[0]}</SkillIcon>)

  return (
    <motion.fieldset className="frameBorde"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ type: "spring", bounce: 0.5, duration: 2 }}>
      <legend>{children}</legend>
      {listaIconos}
    </motion.fieldset>
  );
}