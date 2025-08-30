import React, { useEffect, useState } from "react";
import ImagenAstro from "./ImagenAstro";
import BarraDeDestinos from "./BarraDeDestinos";
import NombreAstro from "./NombreAstro";
import Descripcion from "./Descripcion";
import DatosAstro from "./DatosAstro";

function Destinos(props) {
  const [ancho_ventana, set_ancho_ventana] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      set_ancho_ventana(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () =>
        set_ancho_ventana(window.innerWidth)
      );
    };
    console.log(window.innerWidth);
  }, []);

  return (
    <section className="container-fluid mx-0 mt-4 pb-sm-4 p-0 h-90 px-lg-5  ">
      <div
        className="row align-content-start m-0 px-0 pb-0 px-lg-5 d-lg-none"
        style={{ height: "1000px" }}
      >
        <div className="col-12 col-lg-6 p-0  ">
          <div
            id="marco_astro"
            className=" pt-lg-4 d-flex justify-content-center h-100 "
          >
            <ImagenAstro astro={props.astro} ancho_ventana={ancho_ventana} />
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <BarraDeDestinos astro={props.astro} />
          <div className="d-flex  flex-column justify-content-between">
            <NombreAstro astro={props.astro} />
            <Descripcion astro={props.astro} />
            <hr size="4" className="mx-5 z-3 my-sm-5  bg-white " />
            <DatosAstro astro={props.astro} />
          </div>
        </div>
      </div>
      <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-lg-5 h-100 d-lg-block d-none">
        <div className="col-12 pt-lg-5 px-5">
          <div className="row justify-content-around">
            <div className="col-5">
              <ImagenAstro astro={props.astro} />
            </div>
            <div className="col-5">
              <div className="d-flex flex-column justify-content-between ">
                <BarraDeDestinos astro={props.astro} />
                <NombreAstro astro={props.astro} />
                <Descripcion astro={props.astro} />
                <hr size="4" className="mx-0 z-3   bg-white " />
                <DatosAstro astro={props.astro} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinos;
