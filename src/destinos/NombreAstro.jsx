import React from "react";

function NombreAstro(props) 
{


    return (
        <h1 className="text-light fs-4 fs-sm-3 fs-lg-2 text-lg-start letra-bellefair pt-5 pb-5 m-0">{props.astro.toUpperCase()}</h1>
    )
}

export default NombreAstro;