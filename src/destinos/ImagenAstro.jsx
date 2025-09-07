import React, { useEffect, useState } from "react";

const moon = process.env.PUBLIC_URL + "/imagenes/astros/lunaSvg.svg";
const mars = process.env.PUBLIC_URL + "/imagenes/astros/mars.svg";
const europa = process.env.PUBLIC_URL + "/imagenes/astros/europa.svg";
const titan = process.env.PUBLIC_URL + "/imagenes/astros/titan.svg";

function ImagenAstro({  astro }) {
  
  
  const imagenes_astro = {
    moon: moon,
    mars: mars,
    europa: europa,
    titan: titan,
  };


  return (
    <div className="w-xl-100 py-5 align-content-center  py-xl-0  my-xl-0 ">
      <img
        className=" img-fluid astro"
        src={imagenes_astro[astro]}
        alt=""
      ></img>
    </div>
  );
}

export default ImagenAstro;
