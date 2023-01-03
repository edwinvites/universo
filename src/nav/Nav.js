import React from "react";
import logo_pagina from './logo_3.png';
import './Nav.css';
import 'bootstrap/js/dist/offcanvas';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function Nav() {
  return (

    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand ">
        <Link to={"/"} >

          <img src={logo_pagina} alt='logo pagina'></img>
        </Link>


        </div>
        <button className="navbar-toggler text-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <svg className="bi bi-list navbar-toggler-icon text-light" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="offcanvas offcanvas-end offcanvas-vidrio-esmerilado w-75 barlow-condensed" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body ">
            <table className="table table-borderless text-white">

              <tbody className="text-start">
                <tr>
                  <th className="" scope="row" data-bs-dismiss="offcanvas" aria-label="Close"><Link to={"/"} className="text-decoration-none text-light">00</Link></th>

                  <td data-bs-dismiss="offcanvas" aria-label="Close" className="text-decoration-none"><Link to={"/"} className="text-decoration-none text-light">HOME</Link></td>
                </tr>
                <tr>
                  
                  <th className="" scope="row" data-bs-dismiss="offcanvas" aria-label="Close"><Link to={"/destinos/luna"} className="text-decoration-none text-light">01</Link></th>
                  <td data-bs-dismiss="offcanvas" aria-label="Close" ><Link to={"/destinos/luna"} className="text-decoration-none text-light">DESTINOS</Link></td>
                </tr>
                <tr>
                  <th className="" scope="row" data-bs-dismiss="offcanvas" aria-label="Close">02</th>
                  <td data-bs-dismiss="offcanvas" aria-label="Close"><Link to={"/tripulacion/douglas"} className="text-decoration-none text-light">CREW</Link></td>
                </tr>
                <tr>
                  <th className="" scope="row" data-bs-dismiss="offcanvas" aria-label="Close">03</th>
                  <td data-bs-dismiss="offcanvas" aria-label="Close"><Link to={"/tecnologia/nave"} className="text-decoration-none text-light">TECHNOLOGY</Link></td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
