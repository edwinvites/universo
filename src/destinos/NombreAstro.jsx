import React from "react";

function NombreAstro({astro}) 
{


    return (
        <h1 className="text-light fs-4 fs-sm-3 fs-xl-2 text-xl-start letra-bellefair pt-5 pb-5 m-0">{astro.toUpperCase()}</h1>
    )
}

export default NombreAstro;