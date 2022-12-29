import React from "react";
import marte from "./marte.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Mars() {

    return (
        
        <section>

            <img className="mt-4 mb-4 " src={marte}></img>

            <Planetas_listado_html destino={'marte'} />
            <h1 className="text-light letra-bellefair fs-1 pt-3 pb-3">MARS</h1>
            <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 ">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            <hr className="ps-4 pe-4 ms-4 me-4 border-bottom"/>
            <div className="text-lila pt-4">
                <p className="fs-6 mb-2 barlow-condensed">AVG. DISTANCE</p>
                <p className="fs-2 letra-bellefair text-white">225 MIL. KM</p>
            </div>
            <div className="pt-2 pb-4">
                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                <p className="fs-2 letra-bellefair text-white m-0 pb-4">9 MONTHS</p>
            </div>
        </section>



    )

}


export default Mars;