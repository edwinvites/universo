import React from "react";
import Subtitulo from "./Subtitulo";
import ImagenAstro from "./ImagenAstro";
import BarraDeDestinos from "./BarraDeDestinos";
import NombreAstro from "./NombreAstro";
import Descripcion from "./Descripcion";

function Destinos(props) { 



    return (
        
        <section className="container-fluid mx-0 mt-5 p-0 h-90 ">
            <div className="row m-0 px-0 pb-0 pt-4 pb-3 h-100">
                <Subtitulo astro={props.astro}/>
                <div className="col-12 col-xl-6 p-0 vh-60">
                    <div  className=" pt-lg-4 d-flex justify-content-center mb-sm-4 h-100">
                        <ImagenAstro astro={props.astro} />
                    </div>

                </div>
                <div className="col-12 col-xl-6 p-0">
                    <BarraDeDestinos astro={props.astro} />
                    <NombreAstro astro={props.astro} />
                    <Descripcion astro={props.astro} />
                    <hr className="mx-5  pt-sm-4 border-bottom " />
                    <div className="container m-0 ">
                        <div className="row m-0 pt-2">

                            <div className="col-12 col-sm-6 text-lila pt-1 pb-3 pt-sm-0 ">
                                <p className="fs-1 my-3 barlow-condensed espacio-entre-letras-punto-1">AVG. DISTANCE</p>
                                <p className="display-4 my-2 letra-bellefair text-white">384,400 KM</p>
                            </div>
                            <div className="col-12 col-sm-6 pt-3 pt-sm-0 pb-2 pb-sm-0">
                                <p className="fs-1 my-3 text-lila barlow-condensed espacio-entre-letras-punto-1">EST. TRAVEL TIME</p>
                                <p className="display-4 my-2 letra-bellefair text-white ">3 DAYS</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
    
}

export default Destinos;