import React from "react";
import Nav from "../nav/Nav";
import Anousheh from "./Anousheh";
import Douglas from "./Douglas";
import Mark from "./Mark";
import Victor from "./Victor";



function Tripulacion(props) {
    // public\imagenes\fondo-destinos.png
    const style = {
        background: "no-repeat " + "url('/imagenes/fondo_ingenieros.svg')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center ps-3 pe-3">
            <Nav />
            <h3 className="text-light barlow-condensed pt-4 fs-5"><span className="text-light text-opacity-25 pe-3 barlow-condensed">02</span> MEET YOUR CREW</h3>
            {props.nombre === 'douglas' ? <Douglas /> : props.nombre === 'mark' ? <Mark /> : props.nombre === 'victor' ? <Victor /> : props.nombre === 'anousheh' ? <Anousheh /> : null}


        </section>
    );
}

export default Tripulacion;