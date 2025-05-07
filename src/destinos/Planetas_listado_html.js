import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function Planetas_listado_html(props) {

    let activo = " text-white  border-bottom border-white border-4 ";
    let desactivado = " text-lila border-4 border-bottom-nav-hover";
    let [luna, marte, europa, titan] = [desactivado, desactivado, desactivado, desactivado];
    switch (props.destino) {
        case "luna":
            luna = activo;
            marte = desactivado;
            europa = desactivado;
            titan = desactivado;
            break;
        case "marte":
            luna = desactivado;
            marte = activo;
            europa = desactivado;
            titan = desactivado;
            break;
        case "europa":
            luna = desactivado;
            marte = desactivado;
            europa = activo;
            titan = desactivado;
            break;
        case "titan":
            luna = desactivado;
            marte = desactivado;
            europa = desactivado;
            titan = activo;
            break;


        default:
            break;
    }

    return (

        <div className="d-flex justify-content-around mb-4 pt-2  px-5 fs-2 barlow-condensed espacio-entre-letras-punto-15 ">

            <Link to={"/destinos/moon"} className="text-decoration-none" ><span className={luna+" d-block mb-1   pb-3 p-sm-4"}>MOOM</span></Link>
            <Link to={"/destinos/marte"} className="text-decoration-none"><p className={marte +" d-block mb-1   pb-3 p-sm-4"}>MARS</p></Link>
            <Link to={"/destinos/europa"} className="text-decoration-none"><p className={europa +" d-block mb-1  pb-3 p-sm-4"}>EUROPA</p></Link>
            <Link to={"/destinos/titan"} className="text-decoration-none"><p className={titan +" d-block mb-1   pb-3 p-sm-4"}>TITAN</p></Link>
        </div>
    )
}


export default Planetas_listado_html;