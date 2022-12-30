import React from "react";
// import titan from "./titan.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Titan() {

    const style_imagen = {
        height: '230px',
        width: '230px'
    }


    return (
        
        <section>
            <div style={style_imagen} className="mx-auto d-flex justify-content-center">

            <img className="mt-4 mb-4 " src={"/imagenes/titan.svg"}></img>
            </div>

            <Planetas_listado_html destino={'titan'} />
            <h1 className="text-light letra-bellefair fs-1 pt-3 pb-3">TITAN</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <hr className="ps-4 pe-4 ms-4 me-4 border-bottom "/>
            <div className="text-lila pt-4">
                <p className="fs-6 mb-2 barlow-condensed">AVG. DISTANCE</p>
                <p className="fs-2 letra-bellefair text-white">1.6 BIL. KM</p>
            </div>
            <div className="pt-2 pb-4">
                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                <p className="fs-2 letra-bellefair text-white m-0 pb-4">7 YEARS</p>
            </div>
        </section>



    )

}


export default Titan;