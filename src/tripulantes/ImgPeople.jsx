import React from "react";
import douglasMobile from "./imagenes/douglasMobile.svg";
import douglasTablet from "./imagenes/douglas-tablet.svg";
import douglasLaptop from "./imagenes/douglasLaptop.svg";
// import moon from "./imagenes/lunaSvg.svg";
// import mars from "./imagenes/mars.svg";
// import europa from "./imagenes/europa.svg";
// import titan from "./imagenes/titan.svg";
function ImgPeople(props) {

    let infoImg =
    {
        "douglas-hurley": douglasMobile,
        "douglas-hurley/tablet": douglasTablet,
        "douglas-hurley/laptop": douglasLaptop,
        "mars": {
            "img": "mars"
        },
        "europa": {
            "img": "europa"
        },
        "titan": {
            "img": "titan"
        }
    }
console.log(props);

    return (
        <div className="w-lg-100  pt-5 py-lg-0  my-lg-0 ">
            <img className="  w-sm-50 w-lg-82 img-fluid " src={infoImg[props.ruta]}>
            </img>

        </div>
    )

}

export default ImgPeople;

