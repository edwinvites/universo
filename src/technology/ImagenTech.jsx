import React, { useState } from "react";
import mobile_launch_vehicle from "./imagenes/mobile_Launch_Vehicle.svg";
import mobile_spaceport from "./imagenes/mobile_spaceport.png";
import mobile_space_capsule from "./imagenes/mobil_space_capsule.svg";
import tablet_launch_vehicle from "./imagenes/tablet_launch_vehicle.png";
import tablet_spaceport from "./imagenes/tablet_spaceport.png";
import tablet_spacecapsule from "./imagenes/tablet_spacecapsule.png";
import laptop_launch_vehicle from "./imagenes/laptop_launch_vehicle.png";
import laptop_spaceport from "./imagenes/laptop_spaceport.png";
import laptop_spacecapsule from "./imagenes/laptop_spacecapsule.png";
// import mars from "./imagenes/mars.svg";
// import europa from "./imagenes/europa.svg";
// import titan from "./imagenes/titan.svg";
function ImagenTech({tecnologia}) {

      const [tamanio, set_tamanio] = useState(
    window.innerWidth < 550
      ? "mobile"
      : window.innerWidth < 990
      ? "tablet"
      : "laptop"
  );

    let linksImagenes = {
        "launch_vehicle":
        {
            "mobile": mobile_launch_vehicle,
            "tablet": tablet_launch_vehicle,
            "laptop": laptop_launch_vehicle
        },
        "spaceport":
        {
            "mobile": mobile_spaceport,
            "tablet": tablet_spaceport,
            "laptop": laptop_spaceport
        },
        "space_capsule":
        {
            "mobile": mobile_space_capsule,
            "tablet": tablet_spacecapsule,
            "laptop": laptop_spacecapsule
        }

    }

    return (
        <div className="w-lg-100  py-4 py-lg-0  my-lg-0 position-relative imagen_tecnologias">
            <img className=" w-100  w-lg-100 img-fluid  position-absolute top-50 start-50 translate-middle " src={linksImagenes[tecnologia][tamanio]} alt="Imagen de tecnologia" loading="lazy">
            </img>
        </div>
    )
    // return 
    // (
    //     // <img className="my-5 py-4 pt-lg-4 w-50 w-xl-75" src={info[props.astro].img}  >000000000000000000000000000000000000000000000</img>
    // )
}

export default ImagenTech;

