import React from "react";

function NombreTripulante(props) 
{

    let llave = props.path.split("/")[0];
    

    let info = {
        "douglas-hurley" : { 
            nombre: "DOUGLAS HURLEY",
            cargo: "COMMANDER"
                },
        "mark-shuttleworth" : {
            nombre: "MARK SHUTTLEWORTH",
            cargo: "MISSION SPECIALIST"
                },
        "victor-glover" : {
            nombre: "VICTOR GLOVER",
            cargo: "PILOT"
                },
        "anousheh-ansari" : {
            nombre: "ANOUSHEH ANSARI",
            cargo: "FLIGHT ENGINEER"
                }
    }


    return (
        <div className=" mt-1 mt-sm-2 pb-3">
            <p className="m-0 text-white  text-xl-start opacity-50 fs-10 fs-sm-8 fs-xl-6">{info[llave].cargo}</p>
            <h1 className="text-light fs-8 fs-sm-5 fs-xl-4 text-xl-start letra-bellefair py-2 m-0">{info[llave].nombre}</h1>
        </div>
    )
}

export default NombreTripulante;