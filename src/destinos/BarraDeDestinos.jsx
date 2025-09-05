import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

class destinos_activos {
  constructor(path) {
    this.moon = this.asignarValores(path);
    this.mars = this.asignarValores(path);
    this.europe = this.asignarValores(path);
    this.titan = this.asignarValores(path);
  }

  cambiarValores(onMoon, onMars, onEurope, onTitan) {
    this.moon = onMoon;
    this.mars = onMars;
    this.europe = onEurope;
    this.titan = onTitan;
  }

  asignarValores(path) {
    switch (path) {
      case "moon":
        this.cambiarValores(true, false, false, false);
        break;
      case "mars":
        this.cambiarValores(false, true, false, false);
        break;
      case "europa":
        this.cambiarValores(false, false, true, false);
        break;
      case "titan":
        this.cambiarValores(false, false, false, true);
        break;
      default:
        break;
    }
  }
}


function BarraDeDestinos(props) {

    let path = useLocation().pathname.split("/")[2];
    console.log({path});
    
    let destino_activo = new destinos_activos(path);



    return (
        <div id="container_destinos" className="d-flex justify-content-around justify-content-xl-start px-5 ps-xl-0 fs-13 fs-sm-11 barlow-condensed espacio-entre-letras-punto-15 vh-7  ">
            <div className="h-100  d-flex justify-content-between flex-column pe-xl-3">
                <Link to={"/destinos/moon"} className={(destino_activo.moon ? "text-white" : "text-lila") + " " + "text-decoration-none d-block h-100"} >
                    <div  className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>MOOM</span>
                        <div className={(destino_activo.moon ? "bg-white" : "") + " " + "h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-xl-3">
                <Link to={"/destinos/mars"} className={(destino_activo.mars ? "text-white" : "text-lila") + " " + "text-decoration-none d-block h-100"} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>MARS</span>
                        <div className={(destino_activo.mars ? "bg-white" : "") + " " + "h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-xl-3">
                <Link to={"/destinos/europa"} className={(destino_activo.europe ? "text-white" : "text-lila") + " " + "text-decoration-none d-block h-100"} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>EUROPA</span>
                        <div className={(destino_activo.europe ? "bg-white" : "") + " " + "h-5"}></div>
                    </div>
                </Link>
            </div>
            <div className="h-100  d-flex justify-content-between flex-column px-xl-3">
                <Link to={"/destinos/titan"} className={(destino_activo.titan ? "text-white" : "text-lila") + " " + "text-decoration-none d-block h-100"} >
                    <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                        <div className="h-5"></div>
                        <span className={"m-0"}>TITAN</span>
                        <div className={(destino_activo.titan ? "bg-white" : "") + " " + "h-5"}></div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default BarraDeDestinos;