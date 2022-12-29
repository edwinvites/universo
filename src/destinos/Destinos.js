import React from "react";
import Nav from "../nav/Nav";
import ruta_imagen from "../recursos/imagenes/fondo_destinos.svg";
import Moon from "./moon/Moon";
import Mars from "./mars/Mars";
import Europe from "./europa/Europa";
import Titan from "./titan/Titan";


function Destinos(props) {

    console.log(props.destino);

    if(document.getElementById('fondos_del_espacio2'))
    {
        ready();
    }

    function ready() {
        let url = "no-repeat url('" + ruta_imagen + "')";
        let fondo_del_body = document.getElementById('fondos_del_espacio2');
        fondo_del_body.style.background = url;
        fondo_del_body.style.backgroundSize = "cover";
    }
    document.addEventListener("DOMContentLoaded", ready);


    return (
        <section id="fondos_del_espacio2" className="text-center">
            <Nav/>
            <h3 className="text-light barlow-condensed fs-5"><span className="text-light text-opacity-25 pe-3 barlow-condensed">01</span> Pick your destination</h3>

            {props.destino === 'luna' ? <Moon/> : props.destino === 'marte' ? <Mars/> : props.destino === 'europe' ? <Europe/>: props.destino === 'titan' ? <Titan/> : null}
            
            
        </section>
    );
}

export default Destinos;