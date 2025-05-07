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





  let seleccionado = "bg-white";
  let noSeleccionado = "";
  let home, destino, tripulacion, tecnologia;

  switch (props.pagina) {
    case "home":
      home = seleccionado;
      destino = noSeleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case "destinosId":
      home = noSeleccionado;
      destino = seleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case "tripulacion":
      home = noSeleccionado;
      destino = noSeleccionado;
      tripulacion = seleccionado;
      tecnologia = noSeleccionado;
      break;

    case "tecnologia":
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

  switch (props.pagina) {
    case "home":
      inicioOffcanvas = seleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "destinosId":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = seleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "tripulacion":
      inicioOffcanvas = noSeleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = seleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "tecnologia":
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
        <div className=" d-none d-lg-block w-100">
          <hr size="4" className="w-105 z-3 position-relative bg-body z-3 m-0 d-none d-lg-block" />

        </div>
        <div className="d-none fs-2 espacio-entre-letras-punto-15 w-100  d-sm-flex m-0 p-0 h-100 text-white justify-content-end  align-items-center  efectoEsmeril ">
          <ul className="navbar-nav text-light h-100  ps-4 pe-4 fs-3 fs-lg-1 justify-content-xl-around">
            {/* <li className="espacioVacioNav">
                  </li> */}
            <li className="nav-item px-1 px-sm-3 px-lg-3  d-flex justify-content-between flex-column">
              <div className="h-5"></div>
              <Link to={"/"} className="   nav-link  text-light barlow-condensed  align-self-center p-0 " aria-current="page" href="#">
                HOME
              </Link>
              <div className={home + " h-5"}></div>
            </li>
            <li className="nav-item px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
              <div className="h-5"></div>
              <Link to={"/home/destinos/moon"} className=" nav-link text-light barlow-condensed  align-self-center p-0" href="#">
                <span className="me-2 fw-bold">01</span>
                DESTINATION
              </Link>
              <div className={destino + " h-5"}></div>
            </li>
            <li className={"nav-item px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column"}>
            <div className="h-5"></div>
              <Link to={"/tripulacion/douglas"} className={ " nav-link text-light barlow-condensed  align-self-center p-0"}>
                <span className="me-2 fw-bold">02</span>
                CREW
              </Link>
              <div className={tripulacion + " h-5"}></div>
            </li>
            <li className="nav-item px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
            <div className="h-5"></div>
              <Link to={"/tecnologia/nave"} className={ " nav-link text-light barlow-condensed  align-self-center p-0"}>
                <span className="me-2 fw-bold">03</span>
                TECHNOLOGY
              </Link>
              <div className={tecnologia + " h-5"}></div>
            </li>
          </ul>
        </div>
        {/* <div className="row">
            <div className="col-2">

            </div>
            <div className="col-10">

            </div>
          </div> */}





        {/* --------------------------offcanvas----------------------- */}
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
          <div className="offcanvas-body ps-4 pe-0 pt-4 fs-2 espacio-entre-letras-punto-15" >

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
                <div className={"col-10 pe-0" }>
                  <div className="d-flex justify-content-between  ">
                    <Link to={"/destinos/moon"} className="text-decoration-none text-light text-start  " > <span data-bs-dismiss="offcanvas" aria-label="Close">DESTINOS</span></Link>
                    <div className={"w-3 " + destinoOffcanvas}></div>
                  </div>
                </div>
              </div>
              <div className="row  pb-4 lh-1">
                <div className="col-2">
                  <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light fw-bold " ><span data-bs-dismiss="offcanvas" aria-label="Close">02</span></Link>
                </div>
                <div className={"col-10  pe-0 " + tripulacionOffcanvas}>
                  <div className="d-flex justify-content-between   ">
                    <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light text-start  "><span data-bs-dismiss="offcanvas" aria-label="Close">CREW</span></Link>
                    <div className={"w-3 " + tripulacionOffcanvas}></div>
                  </div>
                </div>
              </div>
              <div className="row pb-4 lh-1">
                <div className="col-2">
                  <Link to={"/tecnologia/nave"} className="text-decoration-none text-light  fw-bold"><span data-bs-dismiss="offcanvas" aria-label="Close">03</span></Link>
                </div>
                <div className={"col-10 pe-0 " + tecnologiaOffcanvas}>
                  <div className="d-flex justify-content-between  ">
                    <Link to={"/tecnologia/nave"} className="text-decoration-none text-light text-start " ><span data-bs-dismiss="offcanvas" aria-label="Close">TECHNOLOGY</span></Link>
                    <div className={"w-3 " + tecnologiaOffcanvas}></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
