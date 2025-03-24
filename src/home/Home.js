import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";




function Home(fondo) {

    console.log(fondo);
    

    const style = {
        background: "no-repeat " + "url('./imagenes/Bitmaptablet_inicio.png')",
        backgroundSize: "cover"

    }



    return (
        <section style={style} className="text-center d-flex flex-column justify-content-between  px-4 background_hombe_xl h-xl-100 overflow-auto">
            <Nav nombre="inicio" />
            <div className="cotainer-fluid h-100">
                <div className="row m-0 p-0 align-items-end h-100 pb-5">
                    <div className="col-12 col-sm-2 col-xl-1"></div>
                    <div className="col-12 col-sm-8 col-xl-10 px-0">
                        <div className="container-fluid m-0 p-0">
                            <div className="row m-0 p-0">
                                <div className="col-12"></div>
                                <div className="col-12 col-xl-5 px-0">
                                    <div className="d-flex flex-column justify-content-between home-padding home-padding-sm ">
                                        <p className='letra-gris-oscura mt-3 text-lila fs-8 fs-sm-49 fs-xl-50 barlow-condensed text-xl-start'>SO, YOU WANT TO TRAVEL TO</p>
                                        <p className=' text-light letra-bellefair fs-3 fs-sm-11 fs-xl-25 text-xl-start'>SPACE</p>
                                        <p className='text-white  ms-1 me-1 fs-53 fs-sm-52 fs-xl-52 text-white-50 text-lila lh-lg text-xl-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                                    </div>
                                </div>
                                <div className="col-xl-2"></div>
                                <div className="col-12 col-xl-5 px-0">
                                    <div style={{ height: "260px" }} className='mx-auto mt-4 pt-4 mb-4  pb-4 fs-46 bg-none  w-25 d-flex flex-column justify-content-center justify-content-xl-end padding-boton-explorador-sm'>
                                        <div className="position-relative ">
                                            <Link className="text-decoration-none" to={"/destinos/luna"}>
                                                <div className="bg-white rounded-circle position-absolute start-50 top-50 translate-middle d-flex justify-content-center align-items-center boton_explorer boton_explorer-sm shadow-explorer-hover">
                                                    <p style={{ zIndez: 100 }} className="letra-bellefair text-black fs-7 fs-sm-44 p-0 m-0">EXPLORE</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-xl-1"></div>
                </div>
            </div>
        </section>
    );
}

export default Home;