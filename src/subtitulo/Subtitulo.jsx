import React from "react";

function Subtitulo(props) {

  let pagina = props.path.split("/");
    
  const subtitulos = {
    "home": {"number":"","words":""},
    "tamanioLaptop": {"number":"","words":""},
    "destinos": {"number":"01","words":"PICK YOUR DESTINATION"},
    "crew": {"number":"02","words":"MEET YOUR CREW"},
    "tecnologia": {"number":"03","words":"SPACE LAUNCH 101"},
  }

 
  let clases = "";

  if (pagina[1] === "home") {
      clases = " d-none";
  }

  if (pagina[1] === "tamanioLaptop") {
      clases = " d-none";
  }

    return (
        <div id="titulo" className={" d-flex justify-content-center justify-content-sm-start align-items-center py-3  px-sm-4 pt-sm-5  pb-lg-5 ps-lg-5 ms-lg-5" + clases}>
            <span className="d-inline text-light-emphasis  fs-11 fs-sm-9 fs-lg-7 me-2 ms-lg-5 ps-lg-4 espacio-entre-letras-punto-15 fw-bold">{subtitulos[pagina[1]].number}</span>
            <p className=" ms-2 mb-0 d-inline fs-11 fs-sm-9 fs-lg-7  barlow-condensed text-white espacio-entre-letras-punto-15">{subtitulos[pagina[1]].words}</p>
        </div>
    )

}
export default Subtitulo;