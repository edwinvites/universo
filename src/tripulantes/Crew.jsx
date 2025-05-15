import React from "react";
import SubtituloCrew from "./SubtituloCrew";
import NombreTripulante from "./NombreTripulante";
import DescripcionCrew from "./DescripcionCrew";
import CirclesInline from "./CirclesInline";
import ImgPeople from "./ImgPeople";
// import ImagenAstro from "./ImagenAstro";
// import BarraDeDestinos from "./BarraDeDestinos";
// import NombreAstro from "./NombreAstro";
// import Descripcion from "./Descripcion";
// import DatosAstro from "./DatosAstro";

function Crew(props) {




    return (

        <section className="container-fluid mx-0 mt-5 p-0 h-90 px-lg-5  ">
            <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-lg-5 h-100 d-lg-block d-none">
                <div className="col-12 p-0">
                    <SubtituloCrew astro={props.astro} />
                </div>
                <div className="col-12 pt-lg-5 px-0">
                    <div className="row justify-content-between mx-0 px-4">
                        <div className="col-6 px-0">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div>
                                    <NombreTripulante men={props.men} />
                                    <DescripcionCrew ruta={props.men} />
                                </div>
                                <CirclesInline ruta={props.men} />

                            </div>
                        </div>
                        <div className="col-6 px-0">
                            <ImgPeople ruta={props.men} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="row m-0 px-0  pt-4 pb-3 pb-sm-0 px-lg-5 h-100 d-lg-none">
                <div className="col-12 p-0">
                    <SubtituloCrew astro={props.astro} />
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <NombreTripulante men={props.men} />
                    <DescripcionCrew ruta={props.men} />
                    <CirclesInline ruta={props.men} />
                    <ImgPeople ruta={props.men} />
                    {/* <BarraDeDestinos astro={props.astro} /> */}
                    {/* <DatosAstro astro={props.astro} /> */}
                </div>

            </div>

        </section>
    )

}

export default Crew;