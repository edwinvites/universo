import React from "react";

function DescripcionTech(props) {

    let info = {
        "moon": {
            "nombre": "MOON",
            "descripcion": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
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
        <p className="text-lila text-lg-start fs-12 fs-sm-11 fs-lg-10 px-5  px-sm-4 ps-lg-0 pb-4 pb-sm-0 mb-0 lh-18">
            {info[props.astro].descripcion}
        </p>

    )
}


export default DescripcionTech;