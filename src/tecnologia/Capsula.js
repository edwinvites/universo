import React from "react";
import Cambios_de_pagina from "./Cambios_de_pagina";
import imagenCapsula from ".."


function Capsula() {

    const style_imagen = {
        height: '200px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto d-flex justify-content-center ">
                
                <div className="d-flex align-items-start mt-4">
                <img className=" " src={"/imagenes/Bitmapcapsula.svg"}></img>
                </div>

            </div>

            <Cambios_de_pagina nombre="capsula"/>
            <h3 className="text-light opacity-75 letra-bellefair mt-2 pt-4 fs-6"> THE TEMINOLOGY...</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">SPACE CAPSULE</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. </p>
        </section>



    )

}


export default Capsula;