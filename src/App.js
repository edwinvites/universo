

import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { Link, Navigate, Outlet, redirect, useLocation, useNavigate, useParams } from "react-router-dom";


function App(props) {
  const navigate = useNavigate();
  console.log(window.innerWidth);



  let parametros = useParams();

  const location = useLocation();


  useEffect(() => {
    if ((window.innerWidth > 990) && (window.location.pathname == "/home")) {
      navigate("../tamanioLaptop")

    }

    if (window.innerWidth < 990 && window.location.pathname == "/tamanioLaptop") {
      navigate("../home")
    }
    
    setRutaFondo(fondo[location.pathname]);
  }, [location])

  const fondo = {
    "/home": "./imagenes/BitmapespacioLaptop2.png",
    "/tamanioLaptop": "./imagenes/BitmapespacioLaptop.png",
    "destinosId": "../../imagenes/fondoLuna.svg"
  }
  let [rutaFondo, setRutaFondo] = useState();



  

  useEffect(() => {



    window.addEventListener("resize", () => {

      if ((window.innerWidth > 990) && (window.location.pathname == "/home")) {
        navigate("../tamanioLaptop")

      }

      if (window.innerWidth < 990 && window.location.pathname == "/tamanioLaptop") {
        navigate("../home")
      }
    }
    )
  }, [])



  return (
    <main id="principal" style={{ backgroundImage: " url(" + rutaFondo + ")", backgroundSize: "cover" }} className="text-center    ">
      <Nav pagina={parametros.destinosId ? Object.keys(parametros)[0] : "home"}></Nav>
      <Outlet />
    </main>


  );
}

export default App;
