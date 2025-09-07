import React, { useEffect, useState } from "react";
import ImagenAstro from "./ImagenAstro";
import BarraDeDestinos from "./BarraDeDestinos";
import NombreAstro from "./NombreAstro";
import Descripcion from "./Descripcion";
import DatosAstro from "./DatosAstro";
import { useParams } from "react-router-dom";

function Destinos({astro , establecer_astro}) {


  return (
    <section id="caja_destinos" className="container-fluid mx-0 mt-4 pb-sm-4 p-0  px-xl-5  destinos">


      <div
        className="row align-content-start m-0 px-0 pb-0 px-xl-5 d-xl-none"
      >
        <div className="col-12 col-xl-6 p-0  ">
          <div
            id="marco_astro"
            className=" pt-xl-4 d-flex justify-content-center h-100 "
          >
            <ImagenAstro astro={astro} />
          </div>
        </div>
        <div className="col-12 col-xl-6 p-0">
          <BarraDeDestinos astro={astro}  handlerAstro={establecer_astro} />
          <div className="d-flex  flex-column justify-content-between">
            <NombreAstro astro={astro} />
            <Descripcion astro={astro} />
            <hr size="4" className="mx-5 z-3 my-sm-5  bg-white " />
            <DatosAstro astro={astro} />
          </div>
        </div>
      </div>



      <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-xl-5  d-xl-block d-none">
        <div className="col-12 pt-xl-5 px-5">
          <div className="row justify-content-around">
            <div className="col-5">
              <ImagenAstro astro={astro} />
            </div>
            <div className="col-5">
              <div className="d-flex flex-column justify-content-between ">
                <BarraDeDestinos astro={astro} handlerAstro={establecer_astro}/>
                <NombreAstro astro={astro} />
                <Descripcion astro={astro} />
                <hr size="4" className="mx-0 z-3   bg-white " />
                <DatosAstro astro={astro} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinos;
