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

function BarraDeDestinos({ astro, handlerAstro }) {
  return (
    <div
      id="container_destinos"
      className="d-flex justify-content-around justify-content-xl-start px-5 ps-xl-0 fs-13 fs-sm-11 barlow-condensed espacio-entre-letras-punto-15 vh-7  "
    >
      <div
        className="h-100  d-flex justify-content-between flex-column pe-xl-3 estadoHover "
        onClick={() => handlerAstro("moon")}
      >
        <div className="h-5"></div>
        <span className={astro === "moon" ? "text-white" : "text-lila"}>
          MOOM
        </span>
        <div className={(astro === "moon" && "bg-white") + "\t h-5"}></div>
      </div>
      <div
        className="h-100  d-flex justify-content-between flex-column pe-xl-3 estadoHover"
        onClick={() => handlerAstro("mars")}
      >
        <div className="h-5"></div>
        <span className={astro === "mars" ? "text-white" : "text-lila"}>
          MARS
        </span>
        <div className={(astro === "mars" && "bg-white") + "\t h-5"}></div>
      </div>
      <div
        className="h-100  d-flex justify-content-between flex-column pe-xl-3 estadoHover"
        onClick={() => handlerAstro("europa")}
      >
        <div className="h-5"></div>
        <span className={astro === "europa" ? "text-white" : "text-lila"}>
          EUROPA
        </span>
        <div className={(astro === "europa" && "bg-white") + "\t h-5"}></div>
      </div>
      <div
        className="h-100  d-flex justify-content-between flex-column pe-xl-3 estadoHover"
        onClick={() => handlerAstro("titan")}
      >
        <div className="h-5"></div>
        <span className={astro === "titan" ? "text-white" : "text-lila"}>
          TITAN
        </span>
        <div className={(astro === "titan" && "bg-white") + "\t h-5"}></div>
      </div>
    </div>
  );
}

export default BarraDeDestinos;
