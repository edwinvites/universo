import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from "../home/Home";
import Destinos from "../destinos/Destinos.js";
import Tripulacion from "../tripulantes/Tripulacion.js";
import Tecnologia from "../tecnologia/Tecnologia";
import espacioHome from "../imagenes_2/BitmapespacioLaptop.png";
import Nav from "../nav/Nav.js";
import Base from "../base/Base.js";


function Rutas() {

  


  return (
    <>

    <Router>

      <Routes>

        <Route exact path="/" element={<Home fondo={espacioHome} />}  ></Route>
        {/* <Route exact path="/destinos/luna" element={<Destinos destino={"luna"} />}></Route>
        <Route exact path="/destinos/marte" element={<Destinos destino={"marte"} />}></Route>
        <Route exact path="/destinos/europa" element={<Destinos destino={"europe"} />}></Route>
        <Route exact path="/destinos/titan" element={<Destinos destino={"titan"} />}></Route>


        <Route exact path="/tripulacion/douglas" element={<Tripulacion nombre={"douglas"} />}></Route>
        <Route exact path="/tripulacion/mark" element={<Tripulacion nombre={"mark"} />}></Route>
        <Route exact path="/tripulacion/victor" element={<Tripulacion nombre={"victor"} />}></Route>
        <Route exact path="/tripulacion/anousheh/" element={<Tripulacion nombre={"anousheh"} />}></Route>
        
        <Route exact path="/tecnologia/nave/" element={<Tecnologia nombre={"nave"} />}></Route>
        <Route exact path="/tecnologia/puerto" element={<Tecnologia nombre={"puerto"} />}></Route>
        <Route exact path="/tecnologia/capsula" element={<Tecnologia nombre={"capsula"} />}></Route> */}
      </Routes>



      
    </Router>

    
    <div>
  holas como estaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssss
  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
</div>
    </>


  );
}

export default Rutas;
