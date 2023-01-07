import React from "react";
import Circulos_cambio_d_tripulante from "./Circulos_cambio_d_tripulante";


function Mark() {



    return (


        <div className="container-fluid p-0">
            <div className="row ps-0 pe-0 d-none d-xl-flex " style={{
                paddingTop: "100px", paddingLeft: "0", paddignRight: "0"
            }}>
                <div className="col-6 ps-4 pe-0  pt-4">
                    <div className="row p-0 h-100">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="d-flex flex-column justify-content-around h-100">
                                <h3 className="text-light barlow-condensed fs-50 text-start ps-4 pt-4"><span
                                    className="text-light text-opacity-25 pe-3 barlow-condensed">02</span> MEET YOUR CREW</h3>
                                <div className="m-0 ps-4 pe-0 text-start ">
                                    <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">MISSION SPECIALIST</h3>
                                    <h1 className="text-light letra-bellefair fs-3 fs-sm-42 pt-1 mt-2 pb-1 ">MARK SHUTTLEWORTH</h1>
                                    <p className="text-lila fs-6 me-4 ms-1 mt-4 pb-4 lh-lg">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                                </div>
                                <div className="ms-2 ps-4">
                                    <Circulos_cambio_d_tripulante nombre={"mark"} tamanio={1440} />
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <div className="col-6 ps-0 pe-0 pt-4">
                    <div  className="me-2 ms-2 mb-3 mb-sm-0  d-flex justify-content-center border-bottom border-2 border-bottom-sm-0 border-dark">
                        <div className="d-flex align-items-end justify-content-center">
                            <img className="mt-4 w-75" src={"/imagenes/mark.png"}></img>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row p-0 ">
                <section className="d-none d-sm-flex d-xl-none m-0 p-0 flex-column justify-content-start">
                    <div
                        className="d-flex justify-content-center justify-content-sm-start tablet-tripulantes tablet-tripulantes-sm ps-sm-3">
                        <h3 className="text-light barlow-condensed pt-4 fs-5 fs-sm-52"><span
                            className="text-light text-opacity-25 pe-3 barlow-condensed">02</span> MEET YOUR CREW</h3>
                    </div>
                    <div className="m-0 p-0 ">
                        <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">MISSION SPECIALIST</h3>
                        <h1 className="text-light letra-bellefair fs-3 fs-sm-42 pt-1 mt-2 pb-1 ">MARK SHUTTLEWORTH</h1>
                        <div className="container-fluid m-0 p-0">
                            <div className="row p-0 m-0">
                                <div className="col-12 col-sm-1">
                                </div>
                                <div className="col-12 col-sm-10">
                                    <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 lh-lg">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                                </div>
                                <div className="col-12 col-sm-1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-0 p-0">
                        <Circulos_cambio_d_tripulante nombre={"mark"} />
                    </div>
                    <div
                        className="me-2 ms-2 mb-3 mb-sm-0  d-flex justify-content-center border-bottom border-2 border-bottom-sm-0 border-dark">
                        <div className="d-flex align-items-end justify-content-center">
                            <img className="mt-4 w-75" src={"/imagenes/mark.png"}></img>
                        </div>
                    </div>


                </section>
            </div>
            <div className="row p-0 ">
                <section className="d-flex d-sm-none m-0 p-0 flex-column justify-content-start">
                    <div
                        className="d-flex justify-content-center justify-content-sm-start tablet-tripulantes tablet-tripulantes-sm ps-sm-3">
                        <h3 className="text-light barlow-condensed pt-4 fs-5 fs-sm-52"><span
                            className="text-light text-opacity-25 pe-3 barlow-condensed">02</span> MEET YOUR CREW</h3>
                    </div>
                    <div
                        className="me-2 ms-2 mb-3 mb-sm-0  d-flex justify-content-center border-bottom border-2 border-bottom-sm-0 border-dark">
                        <div className="d-flex align-items-end justify-content-center">
                            <img className="mt-4 w-75" src={"/imagenes/mark.png"}></img>
                        </div>

                    </div>
                    <div className="m-0 p-0">
                        <Circulos_cambio_d_tripulante nombre={"mark"} />
                    </div>
                    <div className="m-0 p-0 ">
                        <h3 className="text-light opacity-25 letra-bellefair pt-4 fs-5">MISSION SPECIALIST</h3>
                        <h1 className="text-light letra-bellefair fs-3 fs-sm-42 pt-1 mt-2 pb-1 ">MARK SHUTTLEWORTH</h1>
                        <div className="container-fluid m-0 p-0">
                            <div className="row p-0 m-0">
                                <div className="col-12 col-sm-1">
                                </div>
                                <div className="col-12 col-sm-10">
                                    <p className="text-lila fs-6 me-4 ms-4 mt-4 pb-4 lh-lg">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                                </div>
                                <div className="col-12 col-sm-1">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>


    )

}


export default Mark;