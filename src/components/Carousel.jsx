import React, { useEffect, useState } from "react";

export const Carousel = ({ tipo, item, condicion }) => {

    const [indexActual, setIndexActual] = useState(0);
    let listaItem;

    const derechaDiv = () => {
        document.querySelectorAll('.carouselDiv').forEach(el => {
            el.classList.add("der");
            if (el.classList.contains("izq")) el.classList.remove("izq");
        });
        setIndexActual(indexAnterior => (indexAnterior + 1) % listaItem.length);
    }


    const izquierdaDiv = () => {
        document.querySelectorAll('.carouselDiv').forEach(el => {
            el.classList.add("izq");
            if (el.classList.contains("der")) el.classList.remove("der");
        });
        setIndexActual(indexAnterior => (indexAnterior - 1 + listaItem.length) % listaItem.length);
    }

    const derechaP = () => {
        document.querySelectorAll('.letraCarousel').forEach(el => {
            el.classList.add("der");
            if (el.classList.contains("izq")) el.classList.remove("izq");
        });
        setIndexActual(indexAnterior => (indexAnterior + 1) % listaItem.length);
    }

    const izquierdaP = () => {
        document.querySelectorAll('.letraCarousel').forEach(el => {
            el.classList.add("izq");
            if (el.classList.contains("der")) el.classList.remove("der");
        });
        setIndexActual(indexAnterior => (indexAnterior - 1 + listaItem.length) % listaItem.length);
    }

    useEffect(() => {
        if(condicion) setIndexActual(0);
    }, [condicion]);

    if (tipo == 1) {
        if (item) {
            listaItem = item.map((i, index) => {
                if (i[0].endsWith(".mp4") || i[0].endsWith(".mov")) {
                    return (
                        <div className={`carouselDiv ${index === indexActual ? "activo" : ""}`}>
                            <video controls src={i[0]}></video>
                            <p className="textoExtraC">{i[1]}</p>
                        </div>
                    );
                } else {
                    return (
                        <div className={`carouselDiv ${index === indexActual ? "activo" : ""}`}>
                            <img src={i[0]} alt="" />
                            <p className="textoExtraC">{i[1]}</p>
                        </div>
                    );
                }
            })
        }
        return (
            <div className="carousel carousel-img">
                <span onClick={izquierdaDiv}> {"<"} </span>
                {listaItem}
                <span onClick={derechaDiv}> {">"} </span>
            </div>
        );
    } else {
        if (item) {
            listaItem = item.map((i, index) => <p className={`letraCarousel ${index === indexActual ? "activo" : ""}`}>
                {i[0]}
            </p>)
        }

        return (
            <div className="carousel">
                <span onClick={izquierdaP}> {"<"} </span>
                {listaItem}
                <span onClick={derechaP}> {">"} </span>
            </div>
        );
    }
}