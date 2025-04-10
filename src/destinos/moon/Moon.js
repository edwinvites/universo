import React from "react";
// import luna from "./luna.svg"
import Planetas_listado_html from "../Planetas_listado_html";
import luna from "./moonMobile.svg";

function Moon(props) {




    return (

        <section className="container mx-0 mt-5 p-0 h-90 ">
            <div className="row m-0 p-0 h-100">
                <div><span className="d-inline text-light-emphasis  fs-1 me-2 letter-spacing-02 fw-bold">01</span><p className=" ms-2 d-inline fs-1 barlow-condensed text-white letter-spacing-02">PICK YOUR DESTINATION</p></div>
                <div className="col-12 col-xl-6 p-0 vh-40">
                    <div id="luna" className=" pt-xl-4 d-flex justify-content-center mb-sm-4 h-100">
                        <img className="mt-4 mb-4 py-3 pt-xl-4 w-40 w-xl-75" src={luna} ></img>
                    </div>

                </div>
                <div className="col-12 col-xl-6 p-0">
                    <Planetas_listado_html destino={'luna'} />
                    <h1 className="text-light display-2 letra-bellefair pt-3 pb-3">MOON</h1>
                    <p className="text-lila fs-1  px-4 mt-4 ps-sm-4 pe-sm-4 pb-4 mb-sm-4 lh-lg">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr className="mx-4  pt-sm-4 border-bottom " />
                    <div className="container m-0 ">
                        <div className="row m-0 pt-2">

                            <div className="col-12 col-sm-6 text-lila pt-4 pt-sm-0 ">
                                <p className="fs-1 mb-2 barlow-condensed">AVG. DISTANCE</p>
                                <p className="display-4 letra-bellefair text-white">384,400 KM</p>
                            </div>
                            <div className="col-12 col-sm-6 pt-2 pt-sm-0 pb-4 pb-sm-0">
                                <p className="fs-1 mb-2 text-lila barlow-condensed">EST. TRAVEL TIME</p>
                                <p className="display-4 letra-bellefair text-white m-0 pb-4">3 DAYS</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </section>



    )

}


export default Moon;