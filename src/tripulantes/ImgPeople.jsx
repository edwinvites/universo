import React, { useState } from "react";
import douglasMobile from "./imagenes/douglasMobile.svg";
import douglasTablet from "./imagenes/douglas-tablet.svg";
import douglasLaptop from "./imagenes/douglasLaptop.svg";
import markMobile from "./imagenes/markMobile.svg";
import markTablet from "./imagenes/mark-tablet.svg";
import markLaptop from "./imagenes/markLaptop.svg";
import victorMobile from "./imagenes/victorMobile.svg";
import victorTablet from "./imagenes/victor-tablet.svg";
import victorLaptop from "./imagenes/victorLaptop.svg";
import anoushehMobile from "./imagenes/anoushehMobile.svg";
import anoushehTablet from "./imagenes/anousheh-tablet.svg";
import anoushehLaptop from "./imagenes/anoushehLaptop.svg";
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
        "mark-shuttleworth": markMobile,
        "mark-shuttleworth/tablet": markTablet,
        "mark-shuttleworth/laptop": markLaptop,
        "victor-glover": victorMobile,
        "victor-glover/tablet": victorTablet,
        "victor-glover/laptop": victorLaptop,
        "anousheh-ansari": anoushehMobile,
        "anousheh-ansari/tablet": anoushehTablet,
        "anousheh-ansari/laptop": anoushehLaptop
    }
console.log(props);



    return (
        <div  className="w-lg-100  pt-5 py-lg-0  my-lg-0 overflow-hidden ">
            <img className="  w-sm-50 w-lg-82 img-fluid " src={infoImg[props.path]} alt="img" />

        </div>
    )

}

export default ImgPeople;

