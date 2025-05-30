import React from "react";
import ImagenAstro from "./ImagenAstro";
import BarraDeDestinos from "./BarraDeDestinos";
import NombreAstro from "./NombreAstro";
import Descripcion from "./Descripcion";
import DatosAstro from "./DatosAstro";

function Destinos(props) {


    

    return (

        <section className="container-fluid mx-0 mt-5 p-0 h-90 px-lg-5  ">
            <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-lg-5 h-100 d-lg-block d-none">
                <div className="col-12 pt-lg-5 px-5">
                    <div className="row justify-content-around">
                        <div className="col-5">
                        <ImagenAstro astro={props.astro} />
                        </div>
                        <div className="col-5">
                            <div className="d-flex flex-column justify-content-between ">
                            <BarraDeDestinos astro={props.astro} />
                            <NombreAstro astro={props.astro} />
                            <Descripcion astro={props.astro} />
                            <hr size="4" className="mx-0 z-3   bg-white " />
                            <DatosAstro astro={props.astro}/>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-lg-5 h-100 d-lg-none">

                <div className="col-12 col-lg-6 p-0  ">
                    <div className=" pt-lg-4 d-flex justify-content-center mb-sm-4 h-100">
                        <ImagenAstro astro={props.astro} />
                    </div>

                </div>
                <div className="col-12 col-lg-6 p-0">
                    <BarraDeDestinos astro={props.astro} />
                    <NombreAstro astro={props.astro} />
                    <Descripcion astro={props.astro} />
                    <hr size="4" className="mx-5 z-3 my-sm-5  bg-white " />

                    <DatosAstro astro={props.astro} />

                </div>

            </div>

        </section>
    )

}

export default Destinos;