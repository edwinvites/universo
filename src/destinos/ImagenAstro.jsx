import React from "react";
import moon from "./imagenes/lunaSvg.svg";
import mars from "./imagenes/mars.svg";
import europa from "./imagenes/europa.svg";
import titan from "./imagenes/titan.svg";
function ImagenAstro(props) {

    let info =
    {
        "moon": {
            "img": moon
        },
        "mars": {
            "img": mars
        },
        "europa": {
            "img": europa
        },
        "titan": {
            "img": titan
        }
    }

    return (
        <div className="w-lg-100 my-5 py-4 py-lg-0  my-lg-0 ">
            <img className=" w-27 w-sm-45 w-lg-100 img-fluid " src={info[props.astro].img}>
            </img>

        </div>
    )
    // return 
    // (
    //     // <img className="my-5 py-4 pt-lg-4 w-50 w-xl-75" src={info[props.astro].img}  >000000000000000000000000000000000000000000000</img>
    // )
}

export default ImagenAstro;

