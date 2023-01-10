import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function Circulos_cambio_d_tripulante(props) {

    let laptop1440 = "d-flex justify-content-start";
    let otrosDispositivos = "d-flex justify-content-center";
    let alineamiento = otrosDispositivos;

    if (props.tamanio === 1440) {
        
        alineamiento = laptop1440;
    }


    let douglas, mark, victor, anousheh;
    switch (props.nombre) {
        case "douglas":
            douglas = "mt-4 mb-4 me-2 me-sm-4 p-2 bg-white rounded-circle";
            mark = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4  me-2 p-2 bg-secondary bg-opacity-50 bg-opacity-100-hover  rounded-circle";
            victor = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            anousheh = "mt-4 mb-4 ms-2 ms-sm-4 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            break;
        case "mark":
            douglas = "mt-4 mb-4 me-2 me-sm-4  p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            mark = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-white rounded-circle";
            victor = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            anousheh = "mt-4 mb-4 ms-2 ms-sm-4 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            break;
        case "victor":
            douglas = "mt-4 mb-4 me-2 me-sm-4  p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            mark = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            victor = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-white rounded-circle";
            anousheh = "mt-4 mb-4 ms-2 ms-sm-4 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            break;
        case "anousheh":
            douglas = "mt-4 mb-4 me-2 me-sm-4  p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            mark = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            victor = "mt-4 mb-4 ms-2 ms-sm-4 me-sm-4 me-2 p-2 bg-secondary  bg-opacity-50 bg-opacity-100-hover rounded-circle";
            anousheh = "mt-4 mb-4 ms-2 ms-sm-4 p-2 bg-white rounded-circle";
            break;


        default:
            break;
    }

    return (

        <div className={alineamiento}>
            <Link to={"/tripulacion/douglas"} ><div className={douglas} ></div></Link>
            <Link to={"/tripulacion/mark"} ><div className={mark} ></div></Link>
            <Link to={"/tripulacion/victor"} ><div className={victor} ></div></Link>
            <Link to={"/tripulacion/anousheh"} ><div className={anousheh} ></div></Link>
        </div>
    )
}


export default Circulos_cambio_d_tripulante;