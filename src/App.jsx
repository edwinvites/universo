

import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { Link, Navigate, Outlet, redirect, useLocation, useNavigate, useParams } from "react-router-dom";


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
    "/destinos/titan/laptop": "../../imagenes/fondoLuna.png"
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
    "/destinos/titan/laptop": "1000px"
  }

  return (
    <main id="principal" style={{ backgroundImage: " url(" + rutaFondo + ")", backgroundSize: "cover", minHeight: alturaMain }} className="text-center    ">
      <Nav pagina={parametros.destinosId ? Object.keys(parametros)[0] : "home"}></Nav>
      <Outlet props={location.pathname} />
    </main>


  );
}

export default App;
