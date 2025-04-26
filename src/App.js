

import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { Link, Navigate, Outlet, useParams } from "react-router-dom";


function App(props) {

  let parametros = useParams();

  // console.log("parametros", parametros);

  const fondo = {
    "": "./imagenes/BitmapespacioLaptop2.png",
    "destinosId": "../../imagenes/fondoLuna.svg"
  }

  let [rutaFondo, setRutaFondo] = useState("");



  useEffect(() => {

    console.log("__________________________________________________________________________________________",);
    console.log("parametros", parametros);
    console.log("parametros.destinosId", parametros.destinosId);
    setRutaFondo(parametros.destinosId ? fondo[Object.keys(parametros)[0]] : fondo[""])
    // console.log("marca \b");
  }, [parametros])




  return (
    <main id="principal" style={{ backgroundImage: " url(" + rutaFondo + ")", backgroundSize: "cover" }} className="text-center   background_home_lg  ">
      <Nav pagina={parametros.destinosId ? Object.keys(parametros)[0]:"home"}></Nav>
      <Outlet />
    </main>


  );
}

export default App;
