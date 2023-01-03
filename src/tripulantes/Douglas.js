import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Douglas() {

    const style_imagen = {
        height: '280px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto mb-3 d-flex justify-content-center border-bottom border-2  border-dark">
                <div className="d-flex align-items-end">

                <img className="mt-4 "  src={"/imagenes/douglas.png"}></img>
                </div>

            </div>
            <Circulos_cambio_d_tripulante nombre={"douglas"}/>
            <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">COMMANDER</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">DOUGLAS HURLEY</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </section>



    )

}


export default Douglas;