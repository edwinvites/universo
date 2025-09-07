import React, { useEffect, useState } from "react";
import ImagenTech from "./ImagenTech";
import ChangeTech from "./ChangeTech";

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

function Tecnologia({ tecnologia, establecer_tecnologia }) {


  return (
    <div className="mt-4 mt-sm-5 mt-lg-1 tecnologia">
      <div className="d-xl-none">
        <ImagenTech tecnologia={tecnologia} />
        <ChangeTech
          tecnologia={tecnologia}
          establecer_tecnologia={establecer_tecnologia}
        ></ChangeTech>
        <p className="fs-10 fs-sm-8 mt-3  mb-2 text-white opacity-50  ">
          {tecnologias_base[tecnologia].subtitle}
        </p>
        <p className="fs-8 fs-sm-5 text-white">
          {tecnologias_base[tecnologia].title}
        </p>
        <p className="fs-sm-11 text-blue-300-alt px-3 mb-0">
          {tecnologias_base[tecnologia].description}
        </p>
      </div>

      <div
        style={{
          paddingLeft: "165px",
          //  height: "734px"
        }}
        className="d-none d-xl-block"
      >
        <div className="d-flex flex-column justify-content-center h-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 px-0">
                <div className="d-flex justify-content-center flex-column h-100">
                  <div
                    style={{ gap: "60px" }}
                    className="d-flex justify-content-between "
                  >
                    <ChangeTech
                      tecnologia={tecnologia}
                      establecer_tecnologia={establecer_tecnologia}
                    ></ChangeTech>
                    <div className="text-start align-content-center">
                      <p className="fs-6 mb-0 text-white opacity-50  ">
                        {tecnologias_base[tecnologia].subtitle}
                      </p>
                      <p className="fs-4 text-white">
                        {tecnologias_base[tecnologia].title}
                      </p>
                      <p className="fs-10 text-blue-300-alt ">
                        {tecnologias_base[tecnologia].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-5 pe-0">
                <ImagenTech tecnologia={tecnologia} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tecnologia;
