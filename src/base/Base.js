import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";




function Base(fondo) {

    console.log(fondo);
    

    const style = {
        background: "no-repeat " + "url('./imagenes/Bitmaptablet_inicio.png')",
        backgroundSize: "cover"

    }



    return (
        <div style={style} className="text-white text-center d-flex flex-column justify-content-between  px-4 background_hombe_xl h-xl-100 overflow-auto">
 sgfdgsdfgsdgfsdgffsd
 sgfdgsdfgsdgfsdgffsdsfdg
 sgfdgsdfgsdgfsdgffsdgsdgsd
 gfsd
 gfsddgfsd
 gfsddgfsdsdg
 sgfdgsdfgsdgfsdgffsdsfdgs
 gfsddgfsdgdf
        </div>
    );
}

export default Base;