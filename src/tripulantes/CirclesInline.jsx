import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function CirclesInline(props) {

    let nombre = props.ruta.split("/");


    let douglas, mark, victor, anousheh;
    switch (nombre[0]) {
        case "douglas-hurley":
            douglas = "bg-white";
            mark = "bg-white opacity-50";
            victor = "bg-white opacity-50";
            anousheh = "bg-white opacity-50";   
            break;
        case "mark":
            douglas = "bg-white opacity-50";
            mark = "bg-white";
            victor = "bg-white opacity-50";
            anousheh = "bg-white opacity-50";
            break;
        case "victor":
            douglas = "bg-white opacity-50";
            mark = "bg-white opacity-50";
            victor = "bg-white";
            anousheh = "bg-white opacity-50";
            break;
        case "anousheh":
            douglas = "bg-white opacity-50";
            mark = "bg-white opacity-50";
            victor = "bg-white opacity-50";
            anousheh = "bg-white";
            break;


        default:
            break;
    }

    return (

        <div className="d-flex justify-content-center justify-content-lg-start pt-4 pt-sm-5 mt-sm-2" id="circlesCrew">
            <Link to={"/tripulacion/douglas"} ><div className={douglas +" rounded-circle mx-2 ms-lg-0 me-lg-4    "} ></div></Link>
            <Link to={"/tripulacion/mark"} ><div className={mark +" rounded-circle mx-2 mx-lg-4  "} ></div></Link>
            <Link to={"/tripulacion/victor"} ><div className={victor + " rounded-circle mx-2 mx-lg-4     "} ></div></Link>
            <Link to={"/tripulacion/anousheh"} ><div className={anousheh + " rounded-circle mx-2 mx-lg-4     "} ></div></Link>
        </div>
    )
}


export default CirclesInline;