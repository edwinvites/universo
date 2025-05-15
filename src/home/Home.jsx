import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import logoExplorer from "./botonExplorer.svg";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    redirect,
    useSearchParams,
    useNavigate
} from "react-router-dom";
import Destinos from "../destinos/Destinos";



function Home() {

    const navigate = useNavigate();
    // function pruebas() {
    //     redirect("/tamanioLaptop");

    // }



    let casa = 5;
    let [searchParams, setSearchParams] = useSearchParams();

    const [boton, setboton] = useState(false);



    

    return (


        <div className="container-fluid px-4 pt-sm-5 mt-sm-5  pb-sm-5 px-lg-5 m-0   h-100  w-100 ">
            <div className="row m-0 p-0  h-100 m-0 px-lg-5">
                <div className="col-12  "></div>
                <div className="col-12  px-0  h-100">

                    <div className="row m-0 p-0 px-lg-5 h-100">
                        <div className="col-12 col-sm-2 col-lg-12"></div>
                        <div className="col-12 col-sm-8 col-lg-6 px-0 h-60">
                            <div className="d-flex flex-column justify-content-between  ">
                                <p className=' mt-4 text-lila fs-11 fs-sm-7 espacio-entre-letras-punto-1 espacio-entre-letras-sm-punto-25 barlow-condensed text-lg-start'>SO, YOU WANT TO TRAVEL TO</p>
                                <p className=' text-light letra-bellefair pt-2 mt-1 fs-3 fs-sm-1 text-lg-start' >SPACE</p>
                                <p className=' fs-12 fs-sm-11 fs-lg-10 text-lila mb-5 pt-3 pb-5 pt-sm-2 pb-sm-5 py-lg-0 mb-lg-0 lh-18 text-lg-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                            </div>
                        </div>
                        <div className="col-sm-2 p-0  d-lg-none"></div>
                        <div className="col-12 col-lg-6 px-0 ">
                            <div className=' bg-none  w-100  d-flex flex-column justify-content-center h-100 w-100 justify-content-lg-end flex-lg-row '>
                                <Link className="text-decoration-none   align-content-center" to={"/destinos/moon"}>
                                    <img id="imagenExplorer" src={logoExplorer} className="img-fluid  w-40 w-lg-100 rounded-circle explorer-shadow">

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