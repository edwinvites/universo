import React from "react";

function Subtitulo({ ubicacion }) {

  
  const section = {
    destinos: { number: "01", slogan: "PICK YOUR DESTINATION" },
    crew: { number: "02", slogan: "MEET YOUR CREW" },
    tecnologia: { number: "03", slogan: "SPACE LAUNCH 101" },
  };


  return (
    <div
      className={ ((ubicacion === "home" && "d-none")) +
        "\t d-flex justify-content-center justify-content-sm-start align-items-center py-3  px-sm-4 pt-sm-5  pb-xl-5 ps-xl-5 ms-xl-5 fs-11 fs-sm-9 fs-xl-7  espacio-entre-letras-punto-15"
      }

      style={{display: (ubicacion === "home") && "none !important"}}
    >
      {(ubicacion !== "home") && 
        <>
          <span className="d-inline text-light-emphasis   me-2 ms-xl-5 ps-xl-4  fw-bold">
            {section[ubicacion].number}
          </span>
          <p className=" ms-2 mb-0 d-inline  barlow-condensed text-white">
            {section[ubicacion].slogan}
          </p>
        </>
      }
    </div>
  );
}
export default Subtitulo;
