import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Nav from "../nav/Nav.js"
import Home from "../home/Home";
import Destinos from "../destinos/Destinos.js";


function Rutas() {
  return (
    
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/destinos/luna" element={<Destinos destino={"luna"} />}></Route>
        <Route exact path="/destinos/marte" element={<Destinos destino={"marte"} />}></Route>
        <Route exact path="/destinos/europa" element={<Destinos destino={"europe"} />}></Route>
        <Route exact path="/destinos/titan" element={<Destinos destino={"titan"} />}></Route>
      </Routes>
    </Router>

  );
}

export default Rutas;
