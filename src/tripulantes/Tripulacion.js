import React from "react";
import Nav from "../nav/Nav";
import Anousheh from "./Anousheh";
import Douglas from "./Douglas";
import Mark from "./Mark";
import Victor from "./Victor";



function Tripulacion(props) {
    // public\imagenes\fondo-destinos.png
    const style = {
        background: "no-repeat " + "url('/imagenes/Bitmap_fondo_tripulacion.png')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center ps-3 pe-3 h-100 overflow-auto">
            <Nav nombre="tripulacion" />

            {props.nombre === 'douglas' ? <Douglas /> : props.nombre === 'mark' ? <Mark /> : props.nombre === 'victor' ? <Victor /> : props.nombre === 'anousheh' ? <Anousheh /> : null}
        </section>
    );
}

export default Tripulacion;