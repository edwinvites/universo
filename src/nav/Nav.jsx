import React, { useState } from "react";
import logo_pagina from "./Logo.svg";
import iconoToggler from "./menu.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Destinos from "../destinos/Destinos";
// import "bootstrap/js/dist/offcanvas.js";
// import bootstrap from "bootstrap/dist/js/bootstrap.js";
import { useEffect } from "react";
import { Offcanvas } from "bootstrap";
// node_modules

class pestanias_activas {
  constructor(onHome, onDestinos, onCrew, onTecnologia) {
    this.home = onHome;
    this.destinos = onDestinos;
    this.crew = onCrew;
    this.tecnologia = onTecnologia;
  }

  cambiarValores(onHome, onDestinos, onCrew, onTecnologia) {
    this.home = onHome;
    this.destinos = onDestinos;
    this.crew = onCrew;
    this.tecnologia = onTecnologia;
  }

  asignarValores(path) {
    switch (path) {
      case "home":
        this.cambiarValores(true, false, false, false);
        break;
      case "destinos":
        this.cambiarValores(false, true, false, false);
        break;
      case "crew":
        this.cambiarValores(false, false, true, false);
        break;
      case "tecnologia":
        this.cambiarValores(false, false, false, true);
        break;
      default:
        break;
    }
  }
}

function Nav({ parentCallback }) {
  const handleClick = (new_ubicacion) => {
    const ubicacion = "destinos";
    parentCallback(ubicacion);
  };

  let path = useLocation().pathname.split("/")[1];
  let pestania_activada = new pestanias_activas(true, false, false, false);
  pestania_activada.asignarValores(path);

  const [width_img, setWidth_img] = useState(() => {
    if (window.innerWidth < 576) {
      return "40px";
    } else if (window.innerWidth >= 576) {
      return "48px";
    }
  });

  return (
    <nav className="navbar navbar-expand-sm w-100 px-0 py-4 py-sm-0  ">
      <div className="container-fluid  px-4 py-0 px-sm-0 h-100 h-lg-70">
        <div className="navbar-brand h-100 align-content-center me-0 ">
          <Link to={"/"} className="p-0 m-0 h-100 align-content-center">
            <img
              style={{ width: width_img }}
              src={logo_pagina}
              className="img-fluid"
              alt=""
            ></img>
          </Link>
        </div>
        <button
          className="navbar-toggler text-light h-100 px-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <img src={iconoToggler} className="img-fluid" alt="toggler"></img>
        </button>

        <div
          className=" d-none d-xl-flex w-xl-38 position-absolute start-16"
          onClick={handleClick}
        >
          <hr size="4" className=" w-100 bg-body z-3 m-0 d-none d-lg-block" />
        </div>

        <ul className="navbar-nav d-none d-sm-flex text-light h-100 vw-80 vw-xl-60  ps-4 pe-4 pb-0 px-lg-2 fs-11 d-flex justify-content-around  align-items-center m-0 p-0 list-unstyled efectoEsmeril ">
          <li className="nav-item h-100 px-1 px-sm-3 px-lg-3  d-flex justify-content-between flex-column ">
            <Link
              to={"/"}
              className="nav-link  text-decoration-none   text-light barlow-condensed  align-self-center d-block h-100 p-0 "
            >
              <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                <div className="h-5"></div>
                <span>HOME</span>
                <div
                  className={
                    (pestania_activada.home ? "bg-white" : "") + " h-5"
                  }
                ></div>
              </div>
            </Link>
          </li>
          <li className="nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
            <div className="d-flex justify-content-between flex-column h-100 estadoHover"
              onClick={()=>handleClick("destinos")}
            >
              <div className="h-5"></div>
              <div>
                <span className="me-2 fw-bold">01</span>
                <span>DESTINATION</span>
              </div>
              <div
                className={
                  (pestania_activada.destinos ? "bg-white" : "") + " h-5"
                }
              ></div>
            </div>

            <Link
              to={"../destinos/moon"}
              className="nav-link text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0"
              href="#"
            ></Link>
          </li>
          <li
            className={
              "nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column"
            }
          >
            <Link
              to={"/crew/douglas-hurley"}
              className={
                "nav-link text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0"
              }
            >
              <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                <div className="h-5"></div>
                <div>
                  <span className="me-2 fw-bold">02</span>
                  <span>CREW</span>
                </div>
                <div
                  className={
                    (pestania_activada.crew ? "bg-white" : "") + " h-5"
                  }
                ></div>
              </div>
            </Link>
          </li>
          <li className="nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column">
            <Link
              to={"/tecnologia"}
              className={
                "nav-link text-decoration-none  text-light barlow-condensed  align-self-center d-block h-100 p-0"
              }
            >
              <div className="d-flex justify-content-between flex-column h-100 estadoHover">
                <div className="h-5"></div>
                <div>
                  <span className="me-2 fw-bold">03</span>
                  <span>TECHNOLOGY</span>
                </div>
                <div
                  className={
                    (pestania_activada.tecnologia ? "bg-white" : "") + " h-5"
                  }
                ></div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* //////////////////////////////////7offcanvas//////////////////77777 */}

      <div
        className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado  w-60 barlow-condensed d-sm-none pt-3"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header px-4 pb-5">
          <h5 className="offcanvas-title" id="offcanvasLabel"></h5>

          <div
            id="botonOffcanvas"
            type="button"
            className=""
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.5752"
                y="0.954102"
                width="24"
                height="3"
                transform="rotate(45 4.5752 0.954102)"
                fill="white"
              />
              <rect
                x="2.4541"
                y="17.9246"
                width="24"
                height="3"
                transform="rotate(-45 2.4541 17.9246)"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="offcanvas-body ps-4 pe-0 pt-4 fs-11 espacio-entre-letras-punto-15">
          <div className="container">
            <div className="row pb-4 lh-1">
              <div className="col-2 px-0">
                <Link
                  to={"/"}
                  className="text-decoration-none text-light fw-bold d-flex justify-content-center w-100"
                >
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    00
                  </span>
                </Link>
              </div>
              <div className={"col-10 pe-0"}>
                <Link
                  to={"/"}
                  className="text-decoration-none text-light text-start "
                >
                  <div className="d-flex justify-content-between   ">
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      HOME
                    </span>
                    <div
                      className={
                        (pestania_activada.home ? "bg-white" : "") + " " + "w-3"
                      }
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row pb-4 lh-1">
              <div className="col-2 px-0">
                <Link
                  to={"/destinos/moon"}
                  className="text-decoration-none text-light fw-bold d-flex justify-content-center w-100"
                >
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    01
                  </span>{" "}
                </Link>
              </div>
              <div className={"col-10 pe-0"}>
                <Link
                  to={"/destinos/moon"}
                  className="text-decoration-none text-light text-start  "
                >
                  <div className="d-flex justify-content-between  ">
                    {" "}
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      DESTINOS
                    </span>
                    <div
                      className={
                        (pestania_activada.destinos ? "bg-white" : "") +
                        " " +
                        "w-3"
                      }
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row  pb-4 lh-1">
              <div className="col-2 px-0">
                <Link
                  to={"/crew/douglas-hurley"}
                  className="text-decoration-none text-light fw-bold d-flex justify-content-center w-100"
                >
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    02
                  </span>
                </Link>
              </div>
              <div className={"col-10  pe-0 "}>
                <Link
                  to={"/crew/douglas-hurley"}
                  className="text-decoration-none text-light text-start  "
                >
                  <div className="d-flex justify-content-between   ">
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      CREW
                    </span>
                    <div
                      className={
                        (pestania_activada.crew ? "bg-white" : "") + " " + "w-3"
                      }
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row pb-4 lh-1">
              <div className="col-2 px-0">
                <Link
                  to={"/tecnologia/nave"}
                  className="text-decoration-none text-light  fw-bold d-flex justify-content-center w-100"
                >
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    03
                  </span>
                </Link>
              </div>
              <div className={"col-10 pe-0 "}>
                <Link
                  to={"/tecnologia"}
                  className="text-decoration-none text-light text-start "
                >
                  <div className="d-flex justify-content-between  ">
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      TECHNOLOGY
                    </span>
                    <div
                      className={
                        (pestania_activada.tecnologia ? "bg-white" : "") +
                        " " +
                        "w-3"
                      }
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   -------------------------------------------  {final offcanvas} -----------------------------      */}
    </nav>
  );
}

export default Nav;
