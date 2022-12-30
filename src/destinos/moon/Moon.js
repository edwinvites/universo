import React from "react";
// import luna from "./luna.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Moon() {

    const style_imagen = {
        height: '230px',
        width: '230px'
    }


    return (
        
        <section>
            <div style={style_imagen} className="mx-auto  d-flex justify-content-center">
            <img className="mt-4 mb-4 " src={"/imagenes/luna.svg"}></img>

            </div>

            <Planetas_listado_html destino={'luna'} />
            <h1 className="text-light letra-bellefair fs-1 pt-3 pb-3">MOON</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr className="ps-4 pe-4 ms-4 me-4 border-bottom "/>
            <div className="text-lila pt-4 ">
                <p className="fs-6 mb-2 barlow-condensed">AVG. DISTANCE</p>
                <p className="fs-2 letra-bellefair text-white">384,400 KM</p>
            </div>
            <div className="pt-2 pb-4">
                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                <p className="fs-2 letra-bellefair text-white m-0 pb-4">3 DAYS</p>
            </div>
        </section>



    )

}


export default Moon;