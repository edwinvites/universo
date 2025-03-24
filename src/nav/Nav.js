import React from "react";
import logo_pagina from './logo_3.png';
import 'bootstrap/js/dist/offcanvas';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function Nav(props) {


  let activado = "nav-item ps-1 pe-1 d-flex justify-content-center border-bottom border-4";
  let desactivado = "nav-item ps-1 pe-1 d-flex justify-content-center border-transparent border-bottom-nav-hover border-bottom border-4";
  let inicio, destino, tripulacion, tecnologia;

  switch (props.nombre) {
    case "inicio":
      inicio = activado;
      destino = desactivado;
      tripulacion = desactivado;
      tecnologia = desactivado;
      break;

    case "destino":
      inicio = desactivado;
      destino = activado;
      tripulacion = desactivado;
      tecnologia = desactivado;
      break;

    case "tripulacion":
      inicio = desactivado;
      destino = desactivado;
      tripulacion = activado;
      tecnologia = desactivado;
      break;

    case "tecnologia":
      inicio = desactivado;
      destino = desactivado;
      tripulacion = desactivado;
      tecnologia = activado;
      break;

    default:
      break;
  }




  return (

    <nav className="navbar navbar-expand-sm position-absolute start-0 top-0 w-100 px-4 py-4 ps-sm-4 pt-sm-0 pe-sm-0  mt-xl-4">
      <div className="container-fluid p-0">
        <div className="navbar-brand ps-xl-4">
          <Link to={"/"} >

            <img src={logo_pagina} alt='logo pagina'></img>
          </Link>


        </div>
        <button className="navbar-toggler text-light pe-sm-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <svg className="bi bi-list navbar-toggler-icon text-light" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <div style={{ height: "80px", backgroundColor: "rgba(255,255,255,0.04)", backdropFilter: "blur(41px)" }} className="d-none d-sm-flex m-0 p-0 text-white justify-content-center  align-items-center w-xl-55 position-relative">
          <hr className="position-absolute w-75 translate-linea start-0 d-none d-xl-block"></hr>
          <ul className="navbar-nav text-light h-100 w-xl-75 ps-4 pe-3 justify-content-xl-around">
            <li className={inicio}>
              <Link to={"/"} className="nav-link  text-light barlow-condensed fs-52  align-self-center " aria-current="page" href="#">
                <span className="me-2 fw-bold">00</span>
                HOME
              </Link>
            </li>
            <li className={destino}>
              <Link to={"/destinos/luna"} className="nav-link text-light barlow-condensed fs-52 align-self-center" href="#">
                <span className="me-2 fw-bold">01</span>
                DESTINATION
              </Link>
            </li>
            <li className={tripulacion}>
              <Link to={"/tripulacion/douglas"} className="nav-link text-light barlow-condensed fs-52 align-self-center">
                <span className="me-2 fw-bold">02</span>
                CREW
              </Link>

            </li>
            <li className={tecnologia}>
              <Link to={"/tecnologia/nave"} className="nav-link text-light barlow-condensed fs-52 align-self-center">
                <span className="me-2 fw-bold">03</span>
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>

        {/* --------------------------offcanvas----------------------- */}
        <div  className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado  w-60 barlow-condensed d-sm-none pt-3" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header px-4 pb-5">
            <h5 className="offcanvas-title" id="offcanvasLabel"></h5>

            <div type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.5752" y="0.954102" width="24" height="3" transform="rotate(45 4.5752 0.954102)" fill="white" />
                <rect x="2.4541" y="17.9246" width="24" height="3" transform="rotate(-45 2.4541 17.9246)" fill="white" />
              </svg>
            </div>

          </div>
          <div className="offcanvas-body px-4 pt-4 fs-7">

            <div className="container">
              <div className="row pb-4">
                <div className="col-2">
                  <Link to={"/"} className="text-decoration-none text-light fw-bold">00</Link>
                </div>
                <div className="col-10 ">
                  <div className="d-flex justify-content-start">
                  <Link to={"/"} className="text-decoration-none text-light text-start ">HOME</Link>
                  </div>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-2">
                  <Link to={"/destinos/luna"} className="text-decoration-none text-light fw-bold ">01</Link>
                </div>
                <div className="col-10 ">
                  <div className="d-flex justify-content-start">
                    <Link to={"/destinos/luna"} className="text-decoration-none text-light text-start ">DESTINOS</Link>
                  </div>
                </div>
              </div>
              <div className="row  pb-4">
                <div className="col-2">
                  <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light fw-bold ">02</Link>
                </div>
                <div className="col-10 ">
                  <div className="d-flex justify-content-start">
                    <Link to={"/tripulacion/douglas"} className="text-decoration-none text-light text-start ">CREW</Link>
                  </div>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-2">
                  <Link to={"/tecnologia/nave"} className="text-decoration-none text-light  fw-bold">03</Link>
                </div>
                <div className="col-10 ">
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
