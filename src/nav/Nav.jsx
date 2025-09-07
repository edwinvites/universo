import React, { useState } from "react";
import logo_pagina from "./Logo.svg";
import iconoToggler from "./menu.svg";
import { Link, useSearchParams } from "react-router-dom";
import { Offcanvas } from "bootstrap";


function Nav({ seccion_callback, ubicacion }) {

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
          <img
            style={{ width: width_img }}
            src={logo_pagina}
            className="img-fluid logo_pagina"
            alt=""
            onClick={() => seccion_callback("home")}
          ></img>
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
        >
          <hr size="4" className=" w-100 bg-body z-3 m-0 d-none d-lg-block" />
        </div>

        <ul className="navbar-nav  text-light barlow-condensed h-100 vw-80 vw-xl-60  ps-4 pe-4 pb-0 px-lg-2 fs-11  d-none d-sm-flex justify-content-around  align-items-center m-0 p-0 list-unstyled efectoEsmeril ">
          <li
            className="nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column estadoHover "
            onClick={() => seccion_callback("home")}
          >
            <div className="h-5"></div>
            <div>
              <span>HOME</span>
            </div>
            <div
              className={(ubicacion === "home" && "bg-white") + "\t h-5"}
            ></div>
          </li>

          <li
            className="nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column estadoHover"
            onClick={() => seccion_callback("destinos")}
          >
            <div className="h-5"></div>
            <div>
              <span className="me-2 fw-bold">01</span>
              <span>DESTINATION</span>
            </div>
            <div
              className={(ubicacion === "destinos" && "bg-white") + "\t h-5"}
            ></div>
          </li>
          <li
            className={
              "nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column estadoHover"
            }
            onClick={() => seccion_callback("crew")}
          >
            <div className="h-5"></div>
            <div>
              <span className="me-2 fw-bold">02</span>
              <span>CREW</span>
            </div>
            <div
              className={(ubicacion === "crew" && "bg-white") + "\t h-5"}
            ></div>
          </li>
          <li
            className={
              "nav-item h-100 px-1 px-sm-3 px-lg-3 d-flex justify-content-between flex-column estadoHover"
            }
            onClick={() => seccion_callback("tecnologia")}
          >
            <div className="h-5"></div>
            <div>
              <span className="me-2 fw-bold">03</span>
              <span>TECHNOLOGY</span>
            </div>
            <div
              className={(ubicacion === "tecnologia" && "bg-white") + "\t h-5"}
            ></div>
          </li>
        </ul>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------offcanvas-------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      <div
        className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado  w-60 barlow-condensed d-sm-none pt-3"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header px-4 pb-5">
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

        <div className="offcanvas-body ps-4 pe-0 pt-4 fs-11 espacio-entre-letras-punto-15 text-light">
          <div className="container">
            <div className="row pb-4 lh-1" onClick={() => seccion_callback("home")}>
              <div className="col-2 px-0">
                <span className="fw-bold">00</span>
              </div>
              <div className={"col-10 pe-0"}>
                <div className="d-flex justify-content-between   ">
                  <span>HOME</span>
                  <div
                    className={(ubicacion === "home" && "bg-white") + "\t w-3"}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="row pb-4 lh-1"
              onClick={() => seccion_callback("destinos")}
            >
              <div className="col-2 px-0">
                <span className="fw-bold">01</span>
              </div>
              <div className={"col-10 pe-0"}>
                <div className="d-flex justify-content-between   ">
                  <span>DESTINOS</span>
                  <div
                    className={
                      (ubicacion === "destinos" && "bg-white") + "\t w-3"
                    }
                  ></div>
                </div>
              </div>
            </div>

            <div className="row pb-4 lh-1" onClick={() => seccion_callback("crew")}>
              <div className="col-2 px-0">
                <span className="fw-bold">02</span>
              </div>
              <div className={"col-10 pe-0"}>
                <div className="d-flex justify-content-between   ">
                  <span>CREW</span>
                  <div
                    className={(ubicacion === "crew" && "bg-white") + "\t w-3"}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="row pb-4 lh-1"
              onClick={() => seccion_callback("tecnologia")}
            >
              <div className="col-2 px-0">
                <span className="fw-bold">03</span>
              </div>
              <div className={"col-10 pe-0"}>
                <div className="d-flex justify-content-between   ">
                  <span>TECHNOLOGY</span>
                  <div
                    className={
                      (ubicacion === "tecnologia" && "bg-white") + "\t w-3"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------offcanvas-------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
    
    </nav>
  );
}

export default Nav;
