import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function Planetas_listado_html(props) {

    let activo = "text-decoration-none text-white  border-bottom border-white border-3 ";
    let desactivado = "text-decoration-none  text-lila border-3 border-bottom-nav-hover text-lila";
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

        <div className="d-flex justify-content-center mb-4 pt-2 fs-52 ">

            <Link to={"/destinos/luna"} className={luna} ><p className="d-block mb-0 p-2 p-sm-4 barlow-condensed fs-sm-50">MOOM</p></Link>
            <Link to={"/destinos/marte"} className={marte}><p className="d-block mb-0 p-2 p-sm-4 barlow-condensed  fs-sm-50">MARS</p></Link>
            <Link to={"/destinos/europa"} className={europa}><p className="d-block mb-0 p-2 p-sm-4 barlow-condensed  fs-sm-50">EUROPA</p></Link>
            <Link to={"/destinos/titan"} className={titan}><p className="d-block mb-0 p-2 p-sm-4 barlow-condensed  fs-sm-50">TITAN</p></Link>
        </div>
    )
}


export default Planetas_listado_html;