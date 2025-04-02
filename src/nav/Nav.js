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
import "bootstrap";
import { useEffect } from "react";


function Nav(props) {

  const [Offcanvas, setOffcanvas] = useState('');




  useEffect(() => {

    let myOffcanvas = document.getElementById("offcanvasNavbar");
    myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
      console.log("afdasf");

      // .click();
    })
    // console.log("marca");

  }, []);


  let seleccionado = " border-bottom border-4";
  let noSeleccionado = " border-transparent border-bottom-nav-hover border-bottom border-4";
  let home, destino, tripulacion, tecnologia;

  switch (props.pagina) {
    case "home":
      home = seleccionado;
      destino = noSeleccionado;
      tripulacion = noSeleccionado;
      tecnologia = noSeleccionado;
      break;

    case "destino":
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

  let seleccionadoOffcanvas = " border-end border-white border-3";
  let noSeleccionadoOffcanvas = " ";
  let inicioOffcanvas, destinoOffcanvas, tripulacionOffcanvas, tecnologiaOffcanvas;

  switch (props.pagina) {
    case "home":
      inicioOffcanvas = seleccionadoOffcanvas;
      destinoOffcanvas = noSeleccionadoOffcanvas;
      tripulacionOffcanvas = noSeleccionadoOffcanvas;
      tecnologiaOffcanvas = noSeleccionadoOffcanvas;
      break;

    case "destino":
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

    <nav className="navbar navbar-expand-sm  w-100 px-0 py-0 pt-sm-0 overflow-hidden ">

      <div className="container-fluid px-4 py-0 px-sm-0 h-100">
        <div className="navbar-brand h-100 align-content-center " >
          <Link to={"/"} className="p-0 m-0 h-100 align-content-center" >
            <img src={logo_pagina} className="img-fluid">

            </img>

          </Link>
        </div>
        <button className="navbar-toggler text-light h-100 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <img src={iconoToggler} className="img-fluid">
          </img>
        </button>
        <div className="d-none w-100 d-sm-flex m-0 p-0 h-100 text-white justify-content-end  align-items-center w-xl-55 menuNavBar ">
          <hr className=" d-none d-xl-block"></hr>

          <ul className="navbar-nav text-light h-100 w-xl-75 ps-4 pe-3 fs-8 justify-content-xl-around">
            {/* <li className="espacioVacioNav">
                  </li> */}
            <li className={"nav-item px-1 px-sm-3 d-flex justify-content-center"}>
              <Link to={""} className={home + " nav-link  text-light barlow-condensed  align-self-center p-0 "} aria-current="page" href="#">
                <span className="me-2 fw-bold ">00</span>
                HOME
              </Link>
            </li>
            <li className={"nav-item px-1 px-sm-3 d-flex justify-content-center"}>
              <Link to={"/destinos/moon"} className={destino + " nav-link text-light barlow-condensed  align-self-center p-0"} href="#">
                <span className="me-2 fw-bold">01</span>
                DESTINATION
              </Link>
            </li>
            <li className={"nav-item px-1 px-sm-3 d-flex justify-content-center"}>
              <Link to={"/tripulacion/douglas"} className={tripulacion + " nav-link text-light barlow-condensed  align-self-center p-0"}>
                <span className="me-2 fw-bold">02</span>
                CREW
              </Link>

            </li>
            <li className={"nav-item px-1 px-sm-3 d-flex justify-content-center"}>
              <Link to={"/tecnologia/nave"} className={tecnologia + " nav-link text-light barlow-condensed  align-self-center p-0"}>
                <span className="me-2 fw-bold">03</span>
                TECHNOLOGY
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





        {/* --------------------------offcanvas----------------------- */}
        <div className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado  w-60 barlow-condensed d-sm-none pt-3" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header px-4 pb-5">
            <h5 className="offcanvas-title" id="offcanvasLabel"></h5>

            <div id="botonOffcanvas" type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.5752" y="0.954102" width="24" height="3" transform="rotate(45 4.5752 0.954102)" fill="white" />
                <rect x="2.4541" y="17.9246" width="24" height="3" transform="rotate(-45 2.4541 17.9246)" fill="white" />
              </svg>
            </div>

          </div>
          <div className="offcanvas-body ps-4 pe-0 pt-4 fs-4">

            <div className="container">
              <div className="row pb-4 ">
                <div className="col-2">
                  <Link to={"/"} className="text-decoration-none text-light fw-bold">00</Link>
                </div>
                <div className={"col-10" + inicioOffcanvas}>
                  <div className="d-flex justify-content-start ">
                    <Link to={"/"} className="text-decoration-none text-light text-start ">HOME</Link>
                  </div>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-2">
                  <Link to={"/destinos/moon"} className="text-decoration-none text-light fw-bold ">01</Link>
                </div>
                <div className={"col-10" + destinoOffcanvas}>
                  <div className="d-flex justify-content-start">
                    <Link to={"/destinos/moon"} className="text-decoration-none text-light text-start ">DESTINOS</Link>
                  </div>
                </div>
              </div>
              <div className="row  pb-4">
                <div className="col-2">
                  <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light fw-bold ">02</Link>
                </div>
                <div className={"col-10" + tripulacionOffcanvas}>
                  <div className="d-flex justify-content-start">
                    <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light text-start ">CREW</Link>
                  </div>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-2">
                  <Link to={"/tecnologia/nave"} className="text-decoration-none text-light  fw-bold">03</Link>
                </div>
                <div className={"col-10" + tecnologiaOffcanvas}>
                  <div className="d-flex justify-content-start">
                    <Link to={"/tecnologia/nave"} className="text-decoration-none text-light text-start ">TECHNOLOGY</Link>
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
