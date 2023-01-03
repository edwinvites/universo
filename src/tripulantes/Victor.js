import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Victor() {

    const style_imagen = {
        height: '280px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto mb-3 d-flex justify-content-center border-bottom border-2  border-dark">
                
                <div className="d-flex align-items-end">
                <img className="mt-4 " src={"/imagenes/victor.png"}></img>

                </div>

            </div>
            <Circulos_cambio_d_tripulante nombre="victor"/>
            <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">PILOT</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">VICTOR GLOVER</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
        </section>



    )

}


export default Victor;