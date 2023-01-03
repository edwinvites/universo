import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Mark() {

    const style_imagen = {
        height: '280px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto mb-3 d-flex justify-content-center border-bottom border-2  border-dark">
                
                <div className="d-flex align-items-end">
                <img className="mt-4 " src={"/imagenes/mark.png"}></img>

                </div>

            </div>
            <Circulos_cambio_d_tripulante nombre="mark"/>
            <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">MISSION SPECIALIST</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">MARK SHUTTLEWORTH</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        </section>



    )

}


export default Mark;