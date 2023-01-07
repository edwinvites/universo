import React from "react";
import Planetas_listado_html from "../Planetas_listado_html";


function Mars() {




    return (

        <section className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className="col-12 col-xl-6 p-0 m-0">
                    <div className="mx-auto  d-flex justify-content-center mb-sm-4 ">
                        <img className="mt-4 mb-4  pt-3 pt-sm-0 w-50 w-xl-75" src={"/imagenes/Bitmapmarte.png"}></img>
                    </div>
                </div>
                <div className="col-12 col-xl-6 p-0 m-0">
                    <Planetas_listado_html destino={'marte'} />
                    <h1 className="text-light letra-bellefair fs-20 fs-xl-12 pt-3 pb-3 ">MARS</h1>
                    <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 lh-lg">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                    <hr className="ps-4 pe-4 ms-4 me-4 border-bottom" />
                    <div className="container-fluid m-0 ">
                        <div className="row m-0 pt-2">
                            <div className="col-12 col-sm-6 text-lila pt-4 pt-sm-0 ">
                                <p className="fs-6 mb-2 barlow-condensed">AVG. DISTANCE</p>
                                <p className="fs-2 letra-bellefair text-white">225 MIL. KM</p>
                            </div>
                            <div className="col-12 col-sm-6 pt-2 pt-sm-0 pb-4 pb-sm-0">
                                <p className="fs-6 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                                <p className="fs-2 letra-bellefair text-white m-0 pb-4">9 MONTHS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )

}


export default Mars;