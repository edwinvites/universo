import React from "react";

function Subtitulo(props) {

    let info = 
    {
        "moon": {
            "num": "01"        
        },
        "marte": {
            "num": "02"
                },
        "europa": {
            "num": "03",
        },
        "titan": {
            "num": "04"
        }
    }

    return (
        <div>
            <span className="d-inline text-light-emphasis  fs-1 me-2 espacio-entre-letras-punto-15 fw-bold">{info[props.astro].num}</span>
            <p className=" ms-2 d-inline fs-1 barlow-condensed text-white espacio-entre-letras-punto-15">PICK YOUR DESTINATION</p>
        </div>
    )

}
export default Subtitulo;