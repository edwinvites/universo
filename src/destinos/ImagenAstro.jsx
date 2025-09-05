import React, { useEffect, useState } from "react";

const moon = process.env.PUBLIC_URL + "/imagenes/astros/lunaSvg.svg";
const mars = process.env.PUBLIC_URL + "/imagenes/astros/mars.svg";
const europa = process.env.PUBLIC_URL + "/imagenes/astros/europa.svg";
const titan = process.env.PUBLIC_URL + "/imagenes/astros/titan.svg";

function ImagenAstro({ ancho_ventana, astro }) {
  console.log({ ancho_ventana });
  const imagenes_astro = {
    moon: moon,
    mars: mars,
    europa: europa,
    titan: titan,
  };

  let tamanio = undefined;

  if (ancho_ventana < 576) {
    tamanio = "150px";
  } else if (ancho_ventana >= 576 && ancho_ventana < 1200) {
    tamanio = "300px";
  } else {
    tamanio = "480px";
  }

  return (
    <div className="w-xl-100 py-5 align-content-center  py-xl-0  my-xl-0 ">
      <img
        style={{ width: tamanio }}
        className=" img-fluid "
        src={imagenes_astro[astro]}
      ></img>
    </div>
  );
}

export default ImagenAstro;
