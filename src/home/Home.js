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
   
 
            <div className="container px-4 m-0 w-100 paginas">
                <div className="row m-0 p-0  h-100 m-0">
                    {/* <div className="col-sm-2 col-xl-1"></div> */}
                    <div className="col-12 col-sm-8 col-xl-10 px-0 h-100">
                        <div className="container m-0 p-0 h-100">
                            <div className="row m-0 p-0 h-100">
                                <div className="col-12"></div>
                                <div className="col-12 col-xl-5 px-0 h-60">
                                    <div className="d-flex flex-column justify-content-between  home-padding-sm ">
                                        <p className=' mt-3 text-lila fs-3 barlow-condensed text-xl-start'>SO, YOU WANT TO TRAVEL TO</p>
                                        <p className=' text-light letra-bellefair display-1 text-xl-start'>SPACE</p>
                                        <p className='text-white   fs-4 text-white-50 text-lila lh-lg text-xl-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                                    </div>
                                </div>
                                <div className="col-xl-2"></div>
                                <div className="col-12 col-xl-5 px-0 h-40">
                                    <div  className=' bg-none  w-100 h-100 d-flex flex-column justify-content-center h-100 w-100 justify-content-xl-end '>
                                        <Link className="text-decoration-none h-100 w-100 align-content-center" to={"/destinos/luna"}>
                                        <img src={logoExplorer} className="img-fluid w-40"> 

                                        </img>
                                            </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-xl-1"></div>
                </div>
            </div>
        
    );
}

export default Home;