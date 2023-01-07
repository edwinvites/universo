import React from "react";
// import luna from "./luna.svg"
import Planetas_listado_html from "../Planetas_listado_html";


function Moon() {

    const style_imagen = {
        height: '230px',
        width: '230px'
    }


    return (

        <section className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
                <div className="col-12 col-xl-6 p-0">
                    <div className="mx-auto pt-xl-4 d-flex justify-content-center mb-sm-4 ">
                        <img className="mt-4 mb-4 pt-3 pt-xl-4 w-50 w-xl-75" src={"/imagenes/luna.png"}></img>
                    </div>

                </div>
                <div className="col-12 col-xl-6 p-0">

                    <Planetas_listado_html destino={'luna'} />
                    <h1 className="text-light letra-bellefair fs-32 fs-sm-20 fs-xl-14 pt-3 pb-3">MOON</h1>
                    <p className="text-lila fs-6 me-4 ms-4 mt-4 ps-sm-4 pe-sm-4 pb-4 mb-sm-4 lh-lg">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr className="ps-4 pe-4 ms-4 me-4 pt-sm-4 border-bottom " />
                    <div className="container-fluid m-0 ">
                        <div className="row m-0 pt-2">

                            <div className="col-12 col-sm-6 text-lila pt-4 pt-sm-0 ">
                                <p className="fs-6 mb-2 barlow-condensed">AVG. DISTANCE</p>
                                <p className="fs-2 letra-bellefair text-white">384,400 KM</p>
                            </div>
                            <div className="col-12 col-sm-6 pt-2 pt-sm-0 pb-4 pb-sm-0">
                                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                                <p className="fs-2 letra-bellefair text-white m-0 pb-4">3 DAYS</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </section>



    )

}


export default Moon;