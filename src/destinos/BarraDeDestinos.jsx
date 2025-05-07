import React from "react";
import Nav from "../nav/Nav";
import Moon from "./moon/Moon";
import Mars from "./mars/Mars";
import Europe from "./europa/Europa";
import Titan from "./titan/Titan";
import { Link } from "react-router-dom";


function BarraDeDestinos(props) {
    console.log("props.astro", props.astro);
    
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
        case "marte":
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
        case "europe":
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
        <div className="d-flex justify-content-around px-5 fs-2 barlow-condensed espacio-entre-letras-punto-15 vh-7  ">
            <div className="h-100  d-flex justify-content-between flex-column">
                <div className="h-5"></div>
                <Link to={"/destinos/moon"} className={textMoon + " text-decoration-none"} ><span className={"m-0"}>MOOM</span></Link>
                <div className={luna + " h-5"}></div>   
            </div>
            <div className="h-100  d-flex justify-content-between flex-column">
                <div className="h-5"></div>
                <Link to={"/destinos/marte"} className={textMars + " text-decoration-none"} ><span className={"m-0"}>MARS</span></Link>
                <div className={marte + " h-5"}></div>   
            </div>
            <div className="h-100  d-flex justify-content-between flex-column">
                <div className="h-5"></div>
                <Link to={"/destinos/europa"} className={textEurope + " text-decoration-none"} ><span className={"m-0"}>EUROPA</span></Link>
                <div className={europa + " h-5"}></div>   
            </div>
            <div className="h-100  d-flex justify-content-between flex-column">
                <div className="h-5"></div>
                <Link to={"/destinos/titan"} className={textTitan + " text-decoration-none"} ><span className={"m-0"}>TITAN</span></Link>
                <div className={titan + " h-5"}></div>   
            </div>
        </div>
    );
}

export default BarraDeDestinos;