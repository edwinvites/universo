import React, { useState } from "react";

function DescripcionCrew(props) {
    let llave = props.path.split("/");

    console.log(llave);
    

    let info = {
        "douglas-hurley": {
            "descripcion": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },

        "mark-shuttleworth": {
            "descripcion": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        "victor-glover": {
            "descripcion": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        "anousheh-ansari": {
            "descripcion": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    }

    const [height_por_dispositivo, setHeight] = useState(() => {
        if(window.innerWidth < 576) {
            return "220px";
        }

        if(window.innerWidth >= 576 && window.innerWidth < 992) {
            return "100px";
        }

        if(window.innerWidth >= 992) {
            return "80px";
        }
    });

    return (
        <p style={{height: height_por_dispositivo}} className="text-lila text-lg-start fs-12 fs-sm-11 fs-lg-10 px-5  px-sm-4 ps-lg-0  pb-sm-0 mb-0 lh-18">
            {info[llave[0]].descripcion}
        </p>

    )
}


export default DescripcionCrew;