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



function Crew({staff,establecer_staff}) {

  return (
    <section className="container-fluid mx-0 mt-1 p-0  px-xl-5  crew">
      <div className="row m-0 px-0  pt-4 pb-3 pb-sm-0 px-xl-5 d-sm-none">
        <div className="col-12 col-xl-6 p-0">
          <NombreTripulante staff={staff} />
          <DescripcionCrew staff={staff} />
          <CirclesInline staff={staff} establecer_staff={establecer_staff} />
          <ImgPeople staff={staff} />
        </div>
      </div>

      <div className="row m-0 px-0  pt-4 pb-3 pb-sm-0 px-xl-5 d-sm-block d-xl-none d-none position-relative">
        <div className="col-12 p-0 ">
          <div className="d-flex flex-column justify-content-between ">
            <NombreTripulante staff={staff} />
            <DescripcionCrew staff={staff} />
            <CirclesInline staff={staff} establecer_staff={establecer_staff} />
            <ImgPeople staff={staff} />
          </div>
        </div>
      </div>

      <div className="row m-0 px-0 pb-0 pt-4 pb-3 px-xl-5  d-xl-flex d-none">
        <div className="col-6 px-0">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <NombreTripulante staff={staff} />
              <DescripcionCrew staff={staff} />
            </div>
            <CirclesInline staff={staff} establecer_staff={establecer_staff} />
          </div>
        </div>
        <div className="col-6 px-0">
          <ImgPeople staff={staff} />
        </div>
      </div>
    </section>
  );
}

export default Crew;
