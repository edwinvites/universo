import React from "react";

function DescripcionCrew(props) {
    let nombre = props.ruta.split("/");

    console.log(nombre);
    

    let info = {
        "douglas-hurley": {
            "descripcion": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },

        "mars": {
            "nombre": "MARS",
            "descripcion": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two times the height of Everest!"
        },
        "europa": {
            "nombre": "EUROPA",
            "descripcion": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        },
        "titan": {
            "nombre": "TITAN",
            "descripcion": "The only moon known to have a dense atmosphere and liquid surface lakes, Titan is a home away from home (just a few hundred degrees colder!)."
        }
    }

    return (
        <p className="text-lila text-lg-start fs-12 fs-sm-11 fs-lg-10 px-5  px-sm-4 ps-lg-0 pb-5 pb-sm-0 mb-0 lh-18">
            {info[nombre[0]].descripcion}
        </p>

    )
}


export default DescripcionCrew;