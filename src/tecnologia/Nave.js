import React from "react";
import Cambios_de_pagina from "./Cambios_de_pagina";
// import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Nave() {

    const style_imagen = {
        height: '200px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto d-flex justify-content-center ">
                
                <div className="d-flex align-items-start mt-4">
                <img className=" " src={"/imagenes/Bitmapdespegue.svg"}></img>
                </div>

            </div>

            <Cambios_de_pagina nombre="nave"/>
            <h3 className="text-light opacity-75 letra-bellefair mt-2 pt-4 fs-6"> THE TEMINOLOGY...</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">LAUNCH VEHICLE</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! </p>
        </section>



    )

}


export default Nave;