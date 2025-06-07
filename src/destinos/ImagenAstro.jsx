import React, { useState } from "react";
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

    const [width, setWidth] = useState(()=>{

        if (window.innerWidth < 576) {
            return "150px";
        } else if (window.innerWidth >= 576 && window.innerWidth < 992) {
            return "300px";
        } else {
            return "480px";
        }


    });
    
    function tamanio_imagen() {
        let tamanio = "";
        if (window.innerWidth < 576) {
            tamanio = setWidth("150px");
        } else if (window.innerWidth >= 576 && window.innerWidth < 992) {
            tamanio = setWidth("300px");
        } else {
            tamanio =setWidth("480px");
        }
        
        return tamanio;
    }

    // tamanio_imagen();

    window.addEventListener("resize", () => {
        tamanio_imagen();
    })

    return (
        <div className="w-lg-100 py-5 mb-4  py-lg-0  my-lg-0 ">
            <img style={{ width: width }} className=" img-fluid " src={info[props.astro].img}>
            </img>

        </div>
    )

}

export default ImagenAstro;

