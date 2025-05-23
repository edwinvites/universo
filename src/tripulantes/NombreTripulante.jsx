import React from "react";

function NombreTripulante(props) 
{

    let llave = props.path.split("/")[0];
    

    let info = {
        "douglas-hurley" : { 
            nombre: "Douglas Hurley",
            cargo: "Commander"
                },
        "mark-shuttleworth" : {
            nombre: "Mark Shuttleworth",
            cargo: "Mission Specialist"
                },
        "victor-glover" : {
            nombre: "Victor Glover",
            cargo: "Pilot"
                },
        "anousheh-ansari" : {
            nombre: "Anousheh Ansari",
            cargo: "Flight Engineer"
                }
    }


    return (
        <div className="pt-5 mt-1 pb-3">
            <p className="m-0 text-white  text-lg-start opacity-50 fs-10 fs-sm-8 fs-lg-6">{info[llave].cargo}</p>
            <h1 className="text-light fs-8 fs-sm-5 fs-lg-4 text-lg-start letra-bellefair py-2 m-0">{info[llave].nombre}</h1>
        </div>
    )
}

export default NombreTripulante;