import React from "react";
import Nav from "../nav/Nav";
import Capsula from "./Capsula";
import Nave from "./Nave";
import Puerto from "./Puerto";




function Tecnologia(props) {
    const style = {
        background: "no-repeat " + "url('/imagenes/Bitmap_fondo_ti.png')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center tablet-tecnologia tablet-tecnologia-sm h-100 overflow-auto">
            <Nav nombre="tecnologia" />

            <div className="d-flex m-0 p-0 justify-content-center justify-content-sm-start">

                <h3 className="text-light barlow-condensed pt-4 ps-sm-4 ms-sm-4 fs-5 fs-sm-52"><span className="text-light text-opacity-25 pe-3 barlow-condensed">03</span>SPACE LAUNCH 101</h3>

            </div>

            {props.nombre === 'nave' ? <Nave /> : props.nombre === 'puerto' ? <Puerto /> : props.nombre === 'capsula' ? <Capsula /> : null}


        </section>
    );
}

export default Tecnologia;