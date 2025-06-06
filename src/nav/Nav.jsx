import React, { useState } from "react";
import logo_pagina from './Logo.svg';
import iconoToggler from './menu.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Destinos from "../destinos/Destinos";
// import "bootstrap/js/dist/offcanvas.js";
// import bootstrap from "bootstrap/dist/js/bootstrap.js";
import { useEffect } from "react";
import { Offcanvas } from "bootstrap";
// node_modules

function Nav(props) {



console.log("path nav", props.path);



  let seleccionado = "bg-white ";
  let noSeleccionado = "";
  let home, destino, tripulacion, tecnologia;

  switch (props.path) {
    case ("/home"):
      home = seleccionado;
      destino = noSeleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/tamanioLaptop"):
      home = seleccionado;
      destino = noSeleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/moon"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/moon/laptop"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/mars"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

      case ("/destinos/mars/laptop"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/europa"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/europa/laptop"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/titan"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case ("/destinos/titan/laptop"):
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/douglas-hurley":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/douglas-hurley/tablet":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/douglas-hurley/laptop":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/mark-shuttleworth":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/mark-shuttleworth/tablet":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/mark-shuttleworth/laptop":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/victor-glover":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/victor-glover/tablet":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/victor-glover/laptop":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/anousheh-ansari":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/anousheh-ansari/tablet":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/crew/anousheh-ansari/laptop":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "/tecnologia":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = noSeleccionado;
      tecnologia = seleccionado;
      break;

    default:
      break;
  }

  let seleccionadoOffcanvas = " bg-white";
  let noSeleccionadoOffcanvas = "";
  let inicioOffcanvas, destinoOffcanvas, tripulacionOffcanvas, tecnologiaOffcanvas;

  switch (props.path) {
    case ("/home"):
      inicioOffcanvas = seleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/tamanioLaptop"):
      inicioOffcanvas = seleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;


    case ("/destinos/moon"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;


    case ("/destinos/moon/laptop"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/mars"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/mars/laptop"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/europa"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/europa/laptop"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/titan"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case ("/destinos/titan/laptop"):
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/douglas-hurley":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/douglas-hurley/tablet":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/douglas-hurley/laptop":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/mark-shuttleworth":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/mark-shuttleworth/tablet":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/mark-shuttleworth/laptop":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/victor-glover":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/victor-glover/tablet":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/victor-glover/laptop":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/anousheh-ansari":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/anousheh-ansari/tablet":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/crew/anousheh-ansari/laptop":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "/tecnologia":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = seleccionadoOffcanvas;
      break;

    default:
      break;
  }




  return (

    <nav className="navbar navbar-expand-sm w-100 px-0 py-4 pt-sm-0  ">

      <div className="container-fluid  px-4 py-0 px-sm-0 h-100 h-lg-70">
        <div className="navbar-brand h-100 align-content-center me-0 " >
          <Link to={"/"} className="p-0 m-0 h-100 align-content-center" >
            <img src={logo_pagina} className="img-fluid">
            </img>
          </Link>
        </div>
        <button className="navbar-toggler text-light h-100 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <img src={iconoToggler} className="img-fluid">
          </img>
        </button>

        {/* //////////////////////////////////7offcanvas//////////////////77777 */}

        <div className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado  w-60 barlow-condensed d-sm-none pt-3" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"  >
          <div className="offcanvas-header px-4 pb-5">
            <h5 className="offcanvas-title" id="offcanvasLabel"></h5>

            <div id="botonOffcanvas" type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.5752" y="0.954102" width="24" height="3" transform="rotate(45 4.5752 0.954102)" fill="white" />
                <rect x="2.4541" y="17.9246" width="24" height="3" transform="rotate(-45 2.4541 17.9246)" fill="white" />
              </svg>
            </div>

          </div>
          <div className="offcanvas-body ps-4 pe-0 pt-4 fs-11 espacio-entre-letras-punto-15" >

            <div className="container">
              <div className="row pb-4 lh-1">
                <div className="col-2 ">
                  <Link to={"/"} className="text-decoration-none text-light fw-bold " ><span data-bs-dismiss="offcanvas" aria-label="Close" >00</span></Link>
                </div>
                <div className={"col-10 pe-0"}>
                  <div className="d-flex justify-content-between   ">
                    <Link to={"/"} className="text-decoration-none text-light text-start " ><span data-bs-dismiss="offcanvas" aria-label="Close" >HOME</span></Link>
                    <div className={"w-3" + inicioOffcanvas}></div>
                  </div>
                </div>
              </div>
              <div className="row pb-4 lh-1">
                <div className="col-2 ">
                  <Link to={"/destinos/moon"} className="text-decoration-none text-light fw-bold " ><span data-bs-dismiss="offcanvas" aria-label="Close">01</span> </Link>
                </div>
                <div className={"col-10 pe-0"}>
                  <div className="d-flex justify-content-between  ">
                    <Link to={"/destinos/moon"} className="text-decoration-none text-light text-start  " > <span data-bs-dismiss="offcanvas" aria-label="Close">DESTINOS</span></Link>
                    <div className={"w-3 " + destinoOffcanvas}></div>
                  </div>
                </div>
              </div>
              <div className="row  pb-4 lh-1">
                <div className="col-2">
                  <Link to={"/crew/douglas-hurley"} className="text-decoration-none text-light fw-bold " ><span data-bs-dismiss="offcanvas" aria-label="Close">02</span></Link>
                </div>
                <div className={"col-10  pe-0 " }>
                  <div className="d-flex justify-content-between   ">
                    <Link to={"/crew/douglas-hurley"} className="text-decoration-none text-light text-start  "><span data-bs-dismiss="offcanvas" aria-label="Close">CREW</span></Link>
                    <div className={"w-3 " + tripulacionOffcanvas}></div>
                  </div>
                </div>
              </div>
              <div className="row pb-4 lh-1">
                <div className="col-2">
                  <Link to={"/tecnologia/nave"} className="text-decoration-none text-light  fw-bold"><span data-bs-dismiss="offcanvas" aria-label="Close">03</span></Link>
                </div>
                <div className={"col-10 pe-0 " }>
                  <div className="d-flex justify-content-between  ">
                    <Link to={"/tecnologia"} className="text-decoration-none text-light text-start " ><span data-bs-dismiss="offcanvas" aria-label="Close">TECHNOLOGY</span></Link>
                    <div className={"w-3 " + tecnologiaOffcanvas}></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>



        <div className=" d-none d-lg-flex w-md-34 w-xl-38 position-absolute start-16">
          <hr size="4" className=" w-100 bg-body z-3 m-0 d-none d-lg-block" />
        </div>

        <div id="barra_links" className=" d-none d-sm-block fs-11 espacio-entre-letras-punto-15 w-100 vw-lg-50  m-0 p-0 h-100 text-white  d-sm-flex justify-content-center justify-content-xl-end align-items-center  efectoEsmeril " >
          <ul className=" text-light h-100 w-100 w-lg-90 ps-4 pe-4 pb-0 px-lg-2 fs-11 d-flex justify-content-around  align-items-center m-0 p-0 list-unstyled  ">                      

            <li className=" h-100 px-1 px-sm-3 px-lg-3  d-flex justify-content-between flex-column ">
              <Link to={"/"} className="  text-decoration-none   text-light barlow-condensed  align-self-center d-block h-100 p-0 " >
                <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                  <div className="h-5"></div>
                  <span>HOME</span>
                  <div className={home + " h-5"}></div>
                </div>
              </Link>
            </li>
            <li className="h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
              <Link to={"../destinos/moon"} className="text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0" href="#">
                <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                  <div className="h-5"></div>
                  <div>
                    <span className="me-2 fw-bold">01</span>
                    <span>DESTINATION</span>
                  </div>
                  <div className={destino + " h-5"}></div>
                </div>

              </Link>
            </li>
            <li className={"h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column"}>
              <Link to={"/crew/douglas-hurley"} className={"text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0"}>
                <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                  <div className="h-5"></div>
                  <div>
                    <span className="me-2 fw-bold">02</span>
                    <span>CREW</span>
                  </div>
                  <div className={tripulacion + " h-5"}></div>
                </div>
              </Link>
            </li>
            <li className="h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
              <Link to={"/tecnologia"} className={"text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0"}>
                <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                  <div className="h-5"></div>
                  <div>
                    <span className="me-2 fw-bold">03</span>
                    <span>TECHNOLOGY</span>
                  </div>
                  <div className={tecnologia + " h-5"}></div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        
        {/* <div className="row">
            <div className="col-2">

            </div>
            <div className="col-10">

            </div>
          </div> */}






      </div>
    </nav>

  );
}

export default Nav;
