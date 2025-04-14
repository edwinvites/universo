import React from "react";
import Nav from "../nav/Nav";
import logoExplorer from "./botonExplorer.svg";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Destinos from "../destinos/Destinos";



function Home(fondo) {






    return (


        <div className="container-fluid px-4 pt-sm-5 mt-sm-5  pb-sm-5 m-0 min-vh-100 h-100  w-100 ">
            <div className="row m-0 p-0  h-100 m-0">
                <div className="col-12  px-0 h-100">

                        <div className="row m-0 p-0 h-100">
                            <div className="col-12 col-sm-2"></div>
                            <div className="col-12 col-sm-8 col-xl-5 px-0 h-60">
                                <div className="d-flex flex-column justify-content-between  home-padding-sm ">
                                    <p className=' mt-4 text-lila fs-2 espacio-entre-letras-punto-1 espacio-entre-letras-sm-punto-25 barlow-condensed text-xl-start'>SO, YOU WANT TO TRAVEL TO</p>
                                    <p className=' text-light letra-bellefair pt-2 mt-1 display-1 text-xl-start'>SPACE</p>
                                    <p className=' fs-3 text-lila mb-5 pt-3 pb-5 pt-sm-2 pb-sm-5 lh-lg text-xl-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                                </div>
                            </div>
                            <div className="col-sm-2 p-0"></div>
                            <div className="col-12 col-xl-5 px-0 ">
                                <div className=' bg-none  w-100  d-flex flex-column justify-content-center h-100 w-100 justify-content-xl-end '>
                                    <Link className="text-decoration-none vh-40  w-100 align-content-center" to={"/destinos/moon"}>
                                        <img src={logoExplorer} className="img-fluid  w-40 rounded-circle shadow-explorer-hover">

                                        </img>
                                    </Link>

                                </div>
                            </div>
                        </div>

                </div>

            </div>
        </div>

    );
}

export default Home;