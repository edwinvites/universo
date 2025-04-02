

import React from "react";
import Nav from "./nav/Nav";
import Rutas from "./rutas/Rutas";
import { Link, Navigate, Outlet } from "react-router-dom";


function App() {
  let style = {
    background: "no-repeat " + "url('./imagenes/BitmapespacioLaptop2.png')",
    backgroundSize: "cover"
}


  return (
    <main   className="text-center  h-100 background_hombe_xl h-xl-100 ">
      <Nav pagina={"home"}></Nav>
      <Outlet />
    </main>


  );
}

export default App;
