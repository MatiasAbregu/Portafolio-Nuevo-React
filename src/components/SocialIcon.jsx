import React from "react";
import { motion } from "framer-motion";

export const SocialIcon = ({ iconoNombre, children, direccion }) => {
    return (
        <motion.a href={direccion} target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}>
            <i className={"bi " + iconoNombre}></i>
            <p>{children}</p>
        </motion.a>
    );
}