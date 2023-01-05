import React from "react";
import Cambios_de_pagina from "./Cambios_de_pagina";


function Puerto() {



    return (

        <section>
            <div  className="mx-auto d-flex justify-content-center ">

                <div className="d-flex align-items-start mt-4 overflow-hidden">
                    <img className="h-100 " src={"/imagenes/Bitmappuerto.png"}></img>
                </div>

            </div>

            <Cambios_de_pagina nombre="puerto" />
            <h3 className="text-light opacity-75 letra-bellefair mt-2 pt-4 fs-6"> THE TEMINOLOGY...</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">SPACEPORT</h1>


            <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-8">
                        <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 lh-lg">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                    </div>
                    <div className="col-12 col-sm-2"></div>
                </div>
            </div>


        </section>



    )

}


export default Puerto;