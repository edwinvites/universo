

import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { Link, Navigate, Outlet, redirect, useLocation, useNavigate, useParams } from "react-router-dom";
import Subtitulo from "./subtitulo/Subtitulo";


function App(props) {
  const navigate = useNavigate();



  let parametros = useParams();

  const location = useLocation();




  useEffect(() => {
    if (window.innerWidth < 990 && window.location.pathname == "/tamanioLaptop") {
      navigate("../home")
    }

    if ((window.innerWidth > 990) && (window.location.pathname == "/home")) {
      navigate("../tamanioLaptop")
    }

    if (window.innerWidth < 990 && window.location.pathname == "/destinos/moon/laptop") {
      navigate("../destinos/moon")
    }

    if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/moon")) {
      navigate("../destinos/moon/laptop");
    }

    if (window.innerWidth < 990 && window.location.pathname == "/destinos/mars/laptop") {
      navigate("../destinos/mars")
    }

    if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/mars")) {
      navigate("../destinos/mars/laptop");
    }

    if (window.innerWidth < 990 && window.location.pathname == "/destinos/europa/laptop") {
      navigate("../destinos/europa")
    }

    if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/europa")) {
      navigate("../destinos/europa/laptop");
    }

    if (window.innerWidth < 990 && window.location.pathname == "/destinos/titan/laptop") {
      navigate("../destinos/titan")
    }

    if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/titan")) {
      navigate("../destinos/titan/laptop");
    }

    if (window.innerWidth < 576 && (window.location.pathname == "/crew/douglas-hurley/tablet" || window.location.pathname == "/crew/douglas-hurley/laptop")) {
      navigate("../crew/douglas-hurley")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <=  990) && ((window.location.pathname == "/crew/douglas-hurley") || (window.location.pathname == "/crew/douglas-hurley/laptop"))) {
      navigate("../crew/douglas-hurley/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/douglas-hurley/tablet") || (window.location.pathname == "/crew/douglas-hurley"))) {
      navigate("../crew/douglas-hurley/laptop");
    }

    if (window.innerWidth < 576 && (window.location.pathname == "/crew/mark-shuttleworth/tablet" || window.location.pathname == "/crew/mark-shuttleworth/laptop")) {
      navigate("../crew/mark-shuttleworth")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <=  990) && ((window.location.pathname == "/crew/mark-shuttleworth") || (window.location.pathname == "/crew/mark-shuttleworth/laptop"))) {
      navigate("../crew/mark-shuttleworth/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/mark-shuttleworth/tablet") || (window.location.pathname == "/crew/mark-shuttleworth"))) {
      navigate("../crew/mark-shuttleworth/laptop");
    }

    if (window.innerWidth < 576 && (window.location.pathname == "/crew/victor-glover/tablet" || window.location.pathname == "/crew/victor-glover/laptop")) {
      navigate("../crew/victor-glover")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <=  990) && ((window.location.pathname == "/crew/victor-glover") || (window.location.pathname == "/crew/victor-glover/laptop"))) {
      navigate("../crew/victor-glover/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/victor-glover/tablet") || (window.location.pathname == "/crew/victor-glover"))) {
      navigate("../crew/victor-glover/laptop");
    }


    if (window.innerWidth < 576 && (window.location.pathname == "/crew/anousheh-ansari/tablet" || window.location.pathname == "/crew/anousheh-ansari/laptop")) {
      navigate("../crew/anousheh-ansari")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <=  990) && ((window.location.pathname == "/crew/anousheh-ansari") || (window.location.pathname == "/crew/anousheh-ansari/laptop"))) {
      navigate("../crew/anousheh-ansari/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/anousheh-ansari/tablet") || (window.location.pathname == "/crew/anousheh-ansari"))) {
      navigate("../crew/anousheh-ansari/laptop");
    }


    setRutaFondo(fondo[location.pathname]);
    setAlturaMain(minimoAltura[location.pathname]);

  }, [location])

  const fondo = {
    "/home": "./imagenes/BitmapespacioLaptop2.png",
    "/tamanioLaptop": "./imagenes/BitmapespacioLaptop.png",
    "/destinos/moon": "../../imagenes/fondoLuna.png",
    "/destinos/moon/laptop": "../../imagenes/fondoLuna.png",
    "/destinos/mars": "../../imagenes/fondoLuna.png",
    "/destinos/mars/laptop": "../../imagenes/fondoLuna.png",
    "/destinos/europa": "../../imagenes/fondoLuna.png",
    "/destinos/europa/laptop": "../../imagenes/fondoLuna.png",
    "/destinos/titan": "../../imagenes/fondoLuna.png",
    "/destinos/titan/laptop": "../../imagenes/fondoLuna.png",
    "/crew/douglas-hurley": "../../imagenes/backgroundCrew.png",
    "/crew/douglas-hurley/tablet": "../../imagenes/backgroundCrew.png",
    "/crew/douglas-hurley/laptop": "../../imagenes/backgroundCrew.png",
    "/crew/mark-shuttleworth": "../../imagenes/backgroundCrew.png",
    "/crew/mark-shuttleworth/tablet": "../../imagenes/backgroundCrew.png",
    "/crew/mark-shuttleworth/laptop": "../../imagenes/backgroundCrew.png",
    "/crew/victor-glover": "../../imagenes/backgroundCrew.png",
    "/crew/victor-glover/tablet": "../../imagenes/backgroundCrew.png",
    "/crew/victor-glover/laptop": "../../imagenes/backgroundCrew.png",
    "/crew/anousheh-ansari": "../../imagenes/backgroundCrew.png",
    "/crew/anousheh-ansari/tablet": "../../imagenes/backgroundCrew.png",
    "/crew/anousheh-ansari/laptop": "../../imagenes/backgroundCrew.png",
    "/tecnologia": "../../imagenes/technology.svg",
    "/tecnologia/launch-vehicle/tablet": "../../imagenes/technology.svg",
    "/tecnologia/launch-vehicle/laptop": "../../imagenes/technology.svg",
  }
  let [rutaFondo, setRutaFondo] = useState();

  let [alturaMain, setAlturaMain] = useState();





  useEffect(() => {



    window.addEventListener("resize", () => {

      if ((window.innerWidth > 990) && (window.location.pathname == "/home")) {
        navigate("../tamanioLaptop")
      }

      if (window.innerWidth < 990 && window.location.pathname == "/tamanioLaptop") {
        navigate("../home")
      }

      if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/moon")) {
        navigate("../destinos/moon/laptop");
      }

      if (window.innerWidth < 990 && window.location.pathname == "/destinos/moon/laptop") {
        navigate("../destinos/moon")
      }

      if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/mars")) {
        navigate("../destinos/mars/laptop");
      }

      if (window.innerWidth < 990 && window.location.pathname == "/destinos/mars/laptop") {
        navigate("../destinos/mars")
      }

      if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/europa")) {
        navigate("../destinos/europa/laptop");
      }

      if (window.innerWidth < 990 && window.location.pathname == "/destinos/europa/laptop") {
        navigate("../destinos/europa")
      }

      if ((window.innerWidth > 990) && (window.location.pathname == "/destinos/titan")) {
        navigate("../destinos/titan/laptop");
      }

      if (window.innerWidth < 990 && window.location.pathname == "/destinos/titan/laptop") {
        navigate("../destinos/titan")
      }


    if (window.innerWidth < 576 && (window.location.pathname == "/crew/douglas-hurley/tablet" || window.location.pathname == "/crew/douglas-hurley/laptop")) {
      navigate("../crew/douglas-hurley")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <= 990) && ((window.location.pathname == "/crew/douglas-hurley") || (window.location.pathname == "/crew/douglas-hurley/laptop"))) {
      navigate("../crew/douglas-hurley/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/douglas-hurley/tablet") || (window.location.pathname == "/crew/douglas-hurley"))) {
      navigate("../crew/douglas-hurley/laptop");
    }



    if (window.innerWidth < 576 && (window.location.pathname == "/crew/mark-shuttleworth/tablet" || window.location.pathname == "/crew/mark-shuttleworth/laptop")) {
      navigate("../crew/mark-shuttleworth")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <= 990) && ((window.location.pathname == "/crew/mark-shuttleworth") || (window.location.pathname == "/crew/mark-shuttleworth/laptop"))) {
      navigate("../crew/mark-shuttleworth/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/mark-shuttleworth/tablet") || (window.location.pathname == "/crew/mark-shuttleworth"))) {
      navigate("../crew/mark-shuttleworth/laptop");
    }


    if (window.innerWidth < 576 && (window.location.pathname == "/crew/victor-glover/tablet" || window.location.pathname == "/crew/victor-glover/laptop")) {
      navigate("../crew/victor-glover")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <= 990) && ((window.location.pathname == "/crew/victor-glover") || (window.location.pathname == "/crew/victor-glover/laptop"))) {
      navigate("../crew/victor-glover/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/victor-glover/tablet") || (window.location.pathname == "/crew/victor-glover"))) {
      navigate("../crew/victor-glover/laptop");
    }

    if (window.innerWidth < 576 && (window.location.pathname == "/crew/anousheh-ansari/tablet" || window.location.pathname == "/crew/anousheh-ansari/laptop")) {
      navigate("../crew/anousheh-ansari")
    }

    if ((window.innerWidth >= 576) && (window.innerWidth <= 990) && ((window.location.pathname == "/crew/anousheh-ansari") || (window.location.pathname == "/crew/anousheh-ansari/laptop"))) {
      navigate("../crew/anousheh-ansari/tablet");
    }

    if ((window.innerWidth > 990) && ((window.location.pathname == "/crew/anousheh-ansari/tablet") || (window.location.pathname == "/crew/anousheh-ansari"))) {
      navigate("../crew/anousheh-ansari/laptop");
    }


    }
    )
  }, [])  

  let minimoAltura = {
    "/home": "820px",
    "/tamanioLaptop": "870px",
    "/destinos/moon": "1120px",
    "/destinos/moon/laptop": "1000px",
    "/destinos/mars": "1120px",
    "/destinos/mars/laptop": "1000px",
    "/destinos/europa": "1120px",
    "/destinos/europa/laptop": "1000px",
    "/destinos/titan": "1120px",
    "/destinos/titan/laptop": "1000px",
    "/crew/douglas-hurley": "1005px",
    "/crew/douglas-hurley/tablet": "985px",
    "/crew/douglas-hurley/laptop": "1250px",
    "/crew/mark-shuttleworth": "1005px",
    "/crew/mark-shuttleworth/tablet": "985px",
    "/crew/mark-shuttleworth/laptop": "1250px",
    "/crew/victor-glover": "1005px",
    "/crew/victor-glover/tablet": "985px",
    "/crew/victor-glover/laptop": "1250px",
    "/crew/anousheh-ansari": "1005px",
    "/crew/anousheh-ansari/tablet": "985px",
    "/crew/anousheh-ansari/laptop": "1250px"
  }

  return (
    <main id="principal" style={{ backgroundImage: " url(" + rutaFondo + ")", backgroundSize: "cover", minHeight: alturaMain }} className="text-center    ">
      <Nav path={location.pathname}></Nav>
      <Subtitulo path={location.pathname} />
      <Outlet  />
    </main>


  );
}

export default App;
