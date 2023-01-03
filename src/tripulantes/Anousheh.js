import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Anousheh() {

    const style_imagen = {
        height: '280px'
    }


    return (

        <section>
            <div style={style_imagen} className="mx-auto mb-3 d-flex justify-content-center border-bottom border-2  border-dark">
                
                <div className="d-flex align-items-end">
                <img className="mt-4 " src={"/imagenes/ansari.png"}></img>

                </div>

            </div>
            <Circulos_cambio_d_tripulante nombre="anousheh"/>
            <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">    FLIGHT ENGINEER</h3>
            <h1 className="text-light letra-bellefair fs-3 pt-1 mt-2 pb-1 ">ANOUSHEH ANSARI</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        </section>



    )

}


export default Anousheh;