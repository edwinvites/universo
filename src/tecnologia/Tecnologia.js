import React from "react";
import Nav from "../nav/Nav";
import Capsula from "./Capsula";
import Nave from "./Nave";
import Puerto from "./Puerto";




function Tecnologia(props) {
    const style = {
        background: "no-repeat " + "url('/imagenes/Bitmapfondo_tech.svg')",
        backgroundSize: "cover"
    }


    return (
        <section style={style} className="text-center ps-3 pe-3">
            <Nav />
            <h3 className="text-light barlow-condensed pt-4 fs-5"><span className="text-light text-opacity-25 pe-3 barlow-condensed">03</span>SPACE LAUNCH 101</h3>
            
            {props.nombre === 'nave' ? <Nave/>: props.nombre === 'puerto' ? <Puerto/>: props.nombre === 'capsula' ? <Capsula/>: null }


        </section>
    );
}

export default Tecnologia;