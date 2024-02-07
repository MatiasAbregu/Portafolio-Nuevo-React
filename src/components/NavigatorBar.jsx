import React, { useEffect } from "react";
import { NavIcon } from "./NavIcon";

export const NavigatorBar = () => {

    useEffect(()=> {
        const posicionadoEncima = () => {
          //Azul
          let rect = document.getElementById("habilidades").getBoundingClientRect();
          let visible = rect.top < window.innerHeight && rect.bottom >= 0;
    
          if(visible) document.getElementById("navBar").classList.add("Azul");
          else document.getElementById("navBar").classList.remove("Azul");

          //Purpura
          rect = document.getElementById("proyectos").getBoundingClientRect();
          visible = rect.top < window.innerHeight && rect.bottom >= 0;

          if(visible) document.getElementById("navBar").classList.add("Purpura");
          else document.getElementById("navBar").classList.remove("Purpura");

          //Naranja
          rect = document.getElementById("Contactame").getBoundingClientRect();
          visible = rect.top < window.innerHeight && rect.bottom >= 0;

          if(visible) document.getElementById("navBar").classList.add("Naranja");
          else document.getElementById("navBar").classList.remove("Naranja");
        }
    
        window.addEventListener("scroll", posicionadoEncima);
    
        return() => {
          window.removeEventListener("scroll", posicionadoEncima);
        };
      }, []);

    return(
        <nav id="navBar">
            <NavIcon posicionDePag={"#habilidades"} iconoNombre={"bi-journal-code"} contenidoNom={"Habilidades"} />
            <NavIcon posicionDePag={"#proyectos"} iconoNombre={"bi-opencollective"} contenidoNom={"Proyectos"} />
            <NavIcon posicionDePag={"#SobreMi"} iconoNombre={"bi-person-vcard"} contenidoNom={"Sobre Mi"} />
            <NavIcon posicionDePag={"#Contactame"} iconoNombre={"bi-phone"} contenidoNom={"Contactame"} />
        </nav>
    );
};