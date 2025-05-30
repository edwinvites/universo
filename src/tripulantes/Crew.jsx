import React from "react";
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

    let dispositivo = props.path.split("/");

    let altura = {
        "tablet": "980px",
        "undefined": "",
        "laptop": "",
    }


    return (

        <section style={{ height: altura[dispositivo[1]] }} className="container-fluid mx-0 mt-5 p-0 h-90 px-lg-5  ">
            <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-lg-5 h-100 d-lg-block d-none">
                <div className="col-12 pt-lg-5 px-0">
                    <div className="row justify-content-between mx-0 px-4">
                        <div className="col-6 px-0">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div>
                                    <NombreTripulante path={props.path} />
                                    <DescripcionCrew path={props.path} />
                                </div>
                                <CirclesInline path={props.path} />

                            </div>
                        </div>
                        <div className="col-6 px-0">
                            <ImgPeople path={props.path} />
                        </div>
                    </div>
                </div>

            </div>



            <div className="row m-0 px-0  pt-4 pb-3 pb-sm-0 px-lg-5 h-100 d-sm-block d-lg-none d-none position-relative">
                <div className="col-12 p-0 h-100">
                    <div className="d-flex flex-column justify-content-between ">

                        <div className="d-flex flex-column justify-content-between ">
                            <NombreTripulante path={props.path} />
                            <div className="vh-sm-15 vh-lg-none">
                                <DescripcionCrew path={props.path} />

                            </div>
                            <CirclesInline path={props.path} />
                        </div>
                        {/* <ImgPeople path={props.path} /> */}
                    </div>
                    <div className="position-absolute bottom-0 w-100">
                        <ImgPeople path={props.path} />
                    </div>
                </div>
                {/* <div className="col-12 col-lg-6 p-0">

                </div> */}

            </div>


            <div className="row m-0 px-0  pt-4 pb-3 pb-sm-0 px-lg-5 h-100 d-sm-none">
                <div className="col-12 col-lg-6 p-0">
                    <NombreTripulante path={props.path} />
                    <DescripcionCrew path={props.path} />
                    <CirclesInline path={props.path} />
                    <ImgPeople path={props.path} />
                    {/* <BarraDeDestinos astro={props.astro} /> */}
                    {/* <DatosAstro astro={props.astro} /> */}
                </div>

            </div>

        </section>
    )

}

export default Crew;