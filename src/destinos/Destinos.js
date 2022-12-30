import React from "react";
import Nav from "../nav/Nav";
import ruta_imagen from "../recursos/imagenes/fondo_destinos.svg";
import Moon from "./moon/Moon";
import Mars from "./mars/Mars";
import Europe from "./europa/Europa";
import Titan from "./titan/Titan";


function Destinos(props) {
    // public\imagenes\fondo-destinos.png
    const style = {
        background: "no-repeat " + "url('/imagenes/fondo_destinos.svg')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center ps-3 pe-3">
            <Nav />
            <h3 className="text-light barlow-condensed fs-5"><span className="text-light text-opacity-25 pe-3 barlow-condensed">01</span> Pick your destination</h3>

            {props.destino === 'luna' ? <Moon /> : props.destino === 'marte' ? <Mars /> : props.destino === 'europe' ? <Europe /> : props.destino === 'titan' ? <Titan /> : null}


        </section>
    );
}

export default Destinos;