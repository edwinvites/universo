import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



function Cambios_de_pagina(props) {


    let nave, puerto, capsula;
    switch (props.nombre) {
        case "nave":
            nave = " me-2 p-2 m-lg-0 bg-white text-black rounded-circle text-center d-flex justify-content-center align-items-center";
            puerto = "ms-3 me-3 m-lg-0 p-2 text-white bg-none border border-secondary rounded-circle d-flex justify-content-center align-items-center";
            capsula = "ms-2 p-2 m-lg-0 text-white bg-none border border-secondary rounded-circle d-flex justify-content-center align-items-center";

            break;
        case "puerto":
            nave = " me-2 p-2 m-lg-0 bg-none text-white border border-secondary rounded-circle text-center d-flex justify-content-center align-items-center";
            puerto = "ms-3 me-3 p-2 m-lg-0 text-black bg-white  rounded-circle d-flex justify-content-center align-items-center";
            capsula = "ms-2 p-2 m-lg-0 text-white bg-none border border-secondary rounded-circle d-flex justify-content-center align-items-center";

            break;
        case "capsula":
            nave = " me-2 p-2 m-lg-0 bg-none text-white border border-secondary rounded-circle text-center d-flex justify-content-center align-items-center";
            puerto = "ms-3 me-3 p-2 m-lg-0 text-white bg-none border border-secondary rounded-circle d-flex justify-content-center align-items-center";
            capsula = "ms-2 p-2 m-lg-0 text-black bg-white rounded-circle d-flex justify-content-center align-items-center";

            break;

        default:
            break;
    }

    return (

        <div className="d-flex justify-content-center mt-4 flex-lg-column pt-2 ps-lg-5 ms-lg-5 ">
            <Link to={"/tecnologia/nave"} className="text-decoration-none letra-bellefair mb-lg-4" ><div className={nave}  style={{width:"50px", height:"50px"}}><p className="m-0 fs-5">1</p> </div></Link>
            <Link to={"/tecnologia/puerto"}  className="text-decoration-none letra-bellefair mb-lg-4" ><div className={puerto} style={{width:"50px", height:"50px"}}><p className="m-0 fs-5">2</p></div></Link>
            <Link to={"/tecnologia/capsula"}  className="text-decoration-none letra-bellefair mb-lg-4"><div className={capsula} style={{width:"50px", height:"50px"}}> <p className="m-0 fs-5">3</p></div></Link>
        </div>
    )
}


export default Cambios_de_pagina;