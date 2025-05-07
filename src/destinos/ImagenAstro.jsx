import React from "react";
import moon from "./imagenes/lunaSvg.svg";
function ImagenAstro(props) 
{

    let info = 
    {
        "moon": {
            "img": moon        
        },
        "marte": {
            "img": "./imagenes/marte.png"
                },
        "europa": {
            "img": "./imagenes/europa.png",
        },
        "titan": {
            "img": "./imagenes/titan.png"
        }
    }

    return (<img className="my-5 py-4 pt-lg-4 w-50 w-xl-75" src={info["moon"].img}></img>)
    // return 
    // (
    //     // <img className="my-5 py-4 pt-lg-4 w-50 w-xl-75" src={info[props.astro].img}  >000000000000000000000000000000000000000000000</img>
    // )
}

export default ImagenAstro;

