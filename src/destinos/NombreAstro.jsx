import React from "react";

function NombreAstro(props) 
{


    return (
        <h1 className="text-light display-1 letra-bellefair pt-5 pb-5 m-0">{props.astro.toUpperCase()}</h1>
    )
}

export default NombreAstro;