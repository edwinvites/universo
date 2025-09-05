import React, { useEffect, useState } from "react";
import ImagenTech from "./ImagenTech";

const tecnologias_base = {
  launch_vehicle: {
    id: "launch",
    subtitle: "THE TERMINOLOGY…",
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
    seleccionado: true,
  },
  spaceport: {
    id: "port",
    subtitle: "THE TERMINOLOGY…",
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    seleccionado: false,
  },
  space_capsule: {
    id: "capsule",
    subtitle: "THE TERMINOLOGY…",
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    seleccionado: false,
  },
};

function Tecnologia() {
  let [seleccion, set_seleccion] = useState("launch_vehicle");

  let [contador, setContador] = useState(1);

  const [tamanio, set_tamanio] = useState(
    window.innerWidth < 550
      ? "mobile"
      : window.innerWidth < 990
      ? "tablet"
      : "laptop"
  );

  const widthHightCircles = {
    mobile: "40px",
    tablet: "56px",
    laptop: "80px",
  };

  const height_page_technology = {
    mobile: "750px",
    tablet: "800px",
    laptop: "750px",
  };

  return (
    <div className="mt-4 mt-sm-5 mt-lg-1">
      <div className="d-lg-none">
        <ImagenTech id={tecnologias_base[seleccion].id} tamanio={tamanio} />
        <div
          id="circulosSeccionTecnologia"
          className="d-flex justify-content-center justify-content-lg-start mt-2 pt-sm-1 mt-sm-2 fs-10 fs-sm-8"
        >
          <div
            className={
              (seleccion === "launch_vehicle"
                ? "text-black bg-white"
                : "text-white border border-dark-subtle") +
              "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
            }
            onClick={() => {
              set_seleccion("launch_vehicle");
            }}
          >
            <span className="">1</span>
          </div>
          <div
            className={
              (seleccion === "spaceport"
                ? "text-black bg-white"
                : "text-white border border-dark-subtle") +
              "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
            }
            onClick={() => {
              set_seleccion("spaceport");
              console.log("entra");
            }}
          >
            <span className="">2 </span>
          </div>
          <div
            className={
              (seleccion === "space_capsule"
                ? "text-black bg-white"
                : "text-white border border-dark-subtle") +
              "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
            }
            onClick={() => {
              set_seleccion("space_capsule");
            }}
          >
            <span className="">3</span>
          </div>
        </div>
        <p className="fs-10 fs-sm-8 mt-5  mb-2 text-white opacity-50  ">
          {tecnologias_base[seleccion].subtitle}
        </p>
        <p className="fs-8 fs-sm-5 text-white">
          {tecnologias_base[seleccion].title}
        </p>
        <p className="fs-sm-11 text-blue-300-alt px-3 mb-0">
          {tecnologias_base[seleccion].description}
        </p>
      </div>
      <div
        style={{
          paddingLeft: "165px",
          paddingBottom: "150px"
          //  height: "734px"
        }}
        className="d-none d-lg-block"
      >
        <div className="d-flex flex-column justify-content-center h-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 px-0">
                <div className="d-flex justify-content-center flex-column h-100">
                  <div
                    // style={{ height: "350px" }}
                    className="d-flex justify-content-between "
                  >
                    <div
                      id="circulosSeccionTecnologiaLaptop"
                      className="d-flex justify-content-between flex-column fs-6 pe-5 me-3"
                    >
                      <div
                        className={
                          (seleccion === "launch_vehicle"
                            ? "text-black bg-white"
                            : "text-white border border-dark-subtle") +
                          "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
                        }
                        onClick={() => {
                          set_seleccion("launch_vehicle");
                        }}
                      >
                        <span className="">1</span>
                      </div>
                      <div
                        className={
                          (seleccion === "spaceport"
                            ? "text-black bg-white"
                            : "text-white border border-dark-subtle") +
                          "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
                        }
                        onClick={() => {
                          set_seleccion("spaceport");
                        }}
                      >
                        <span className="">2</span>
                      </div>
                      <div
                        className={
                          (seleccion === "space_capsule"
                            ? "text-black bg-white"
                            : "text-white border border-dark-subtle") +
                          "\t  rounded-circle d-flex justify-content-center flex-column mx-2 seleccionador_tecnologia"
                        }
                        onClick={() => {
                          set_seleccion("space_capsule");
                        }}
                      >
                        <span className="">3</span>
                      </div>
                    </div>
                    <div className="text-start">
                      <p className="fs-6 mb-0 text-white opacity-50  ">
                        {tecnologias_base[seleccion].subtitle}
                      </p>
                      <p className="fs-4 text-white">
                        {tecnologias_base[seleccion].title}
                      </p>
                      <p className="fs-10 text-blue-300-alt ">
                        {tecnologias_base[seleccion].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-5 pe-0">
                <ImagenTech
                  id={tecnologias_base[seleccion].id}
                  tamanio={tamanio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologia;
