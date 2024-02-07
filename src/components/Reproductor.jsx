import React, { useState } from "react";
let reproductorActivado = true;

export const Reproductor = () => {

    const cambiarEstado = () => {
        const musica = document.getElementById("musica");
        const flecha = document.getElementById("flecha");

        if (reproductorActivado) {
            musica.style.width = "0%";
            reproductorActivado = false;
            flecha.innerText = "<";
        } else {
            musica.style.width = "50%";
            reproductorActivado = true;
            flecha.innerText = ">";
        }
    }

    return (
        <div id='reproductor'>
            <span id="flecha" onClick={cambiarEstado}> {">"} </span>
            <iframe
                src={"https://open.spotify.com/embed/playlist/6xoJ4mAUlfWTsjliHWvUqg?utm_source=generator&theme=0"}
                frameBorder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" id="musica"></iframe>
        </div>
    );
}