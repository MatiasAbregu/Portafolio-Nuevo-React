import React from "react";
import { Carousel } from "./Carousel";

export const Modal = ({ contenido, estado, cerrarModal }) => {
    return (
        <div className={`modal ${estado ? 'mostrar' : ''}`}>
            <div className="cuadroModal">
                <span onClick={() => {cerrarModal();}}>X</span>
                <Carousel tipo={1} item={contenido} condicion={estado ? true : false}/>
            </div>
        </div>
    );
};