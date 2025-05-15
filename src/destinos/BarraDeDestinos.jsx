import React from "react";

import { Link } from "react-router-dom";


function BarraDeDestinos(props) {

    let activo = " bg-white ";
    let desactivado = "";
    let [luna, marte, europa, titan] = [desactivado, desactivado, desactivado, desactivado];
    switch (props.astro) {
        case "moon":
            luna = activo;
            marte = desactivado;
            europa = desactivado;
            titan = desactivado;
            break;
        case "mars":
            luna = desactivado;
            marte = activo;
            europa = desactivado;
            titan = desactivado;
            break;
        case "europa":
            luna = desactivado;
            marte = desactivado;
            europa = activo;
            titan = desactivado;
            break;
        case "titan":
            luna = desactivado;
            marte = desactivado;
            europa = desactivado;
            titan = activo;
            break;


        default:
            break;
    }


    let textActivo = " text-white";
    let textInactivo = "text-lila";
    let [textMoon, textMars, textEurope, textTitan] = [textInactivo, textInactivo, textInactivo, textInactivo];
    switch (props.astro) {
        case "moon":
            textMoon = textActivo;
            textMars = textInactivo;
            textEurope = textInactivo;
            textTitan = textInactivo;
            break;
        case "mars":
            textMoon = textInactivo;
            textMars = textActivo;
            textEurope = textInactivo;
            textTitan = textInactivo;
            break;
        case "europa":
            textMoon = textInactivo;
            textMars = textInactivo;
            textEurope = textActivo;
            textTitan = textInactivo;
            break;
        case "titan":
            textMoon = textInactivo;
            textMars = textInactivo;
            textEurope = textInactivo;
            textTitan = textActivo;
            break;


        default:
            break;
    }


    return (
        <div className="d-flex justify-content-around justify-content-lg-start px-5 ps-lg-0 fs-13 fs-sm-11 barlow-condensed espacio-entre-letras-punto-15 vh-7  ">
            <div className="h-100  d-flex justify-content-between flex-column pe-lg-3">
                <Link to={"/destinos/moon"} className={textMoon + " text-decoration-none d-block h-100"} >
                    <div  className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>MOOM</span>
                        <div className={luna + " h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-lg-3">
                <Link to={"/destinos/mars"} className={textMars + " text-decoration-none d-block h-100 "} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>MARS</span>
                        <div className={marte + " h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-lg-3">
                <Link to={"/destinos/europa"} className={textEurope + " text-decoration-none d-block h-100 "} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>EUROPA</span>
                        <div className={europa + " h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-lg-3">
                <Link to={"/destinos/titan"} className={textTitan + " text-decoration-none d-block h-100 "} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>TITAN</span>
                        <div className={titan + " h-5"}></div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default BarraDeDestinos;