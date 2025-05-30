import React, { useEffect, useState } from 'react';
import ImagenTech from './ImagenTech';


function Tecnologia(props) {

    const texts = {
        "launch_vehicle": {
            "subtitle": "THE TERMINOLOGY…",
            "title": "LAUNCH VEHICLE",
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        "spaceport": {
            "subtitle": "THE TERMINOLOGY…",
            "title": "SPACEPORT",
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        "space_capsule": {
            "subtitle": "THE TERMINOLOGY…",
            "title": "SPACE CAPSULE",
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    };

    const clasesCirculos = {
        "activo": "text-black bg-white",
        "inactivo": "text-white border-light border border-opacity-50"
    }

    console.log("props", props);

    const [subtitle, setSubtitle] = useState(texts[props.section].subtitle);
    const [title, setTitle] = useState(texts[props.section].title);
    const [description, setDescription] = useState(texts[props.section].description);

    const [clases_circulo_launch_vehicle, set_clases_circulo_launch_vehicle] = useState(clasesCirculos["activo"]);
    const [clases_circulo_spaceport, set_clases_circulo_spaceport] = useState(clasesCirculos["inactivo"]);
    const [clases_circulo_spacecapsule, set_clases_circulo_spacecapsule] = useState(clasesCirculos["inactivo"]);
    const [ubicacion, set_ubicacion] = useState("launch_vehicle");
    const [tamanio, set_tamanio] = useState(window.innerWidth > 550 ? (window.innerWidth > 990 ? "laptop" : "tablet") : "mobile");

    console.log("tamanio", tamanio);


    const widthHightCircles = {
        "mobile": "40px",
        "tablet": "56px",
        "laptop": "80px"
    }

    function changeText(params) {
        console.log("params change text", params);

        setDescription(texts[params].description);
        setSubtitle(texts[params].subtitle)
        setTitle(texts[params].title);
    }


    function cambiar_clases_circulos(parametro) {
        if (parametro === "launch_vehicle") {
            set_clases_circulo_launch_vehicle(clasesCirculos["activo"]);
            set_clases_circulo_spaceport(clasesCirculos["inactivo"]);
            set_clases_circulo_spacecapsule(clasesCirculos["inactivo"]);
        } else if (parametro === "spaceport") {
            set_clases_circulo_launch_vehicle(clasesCirculos["inactivo"]);
            set_clases_circulo_spaceport(clasesCirculos["activo"]);
            set_clases_circulo_spacecapsule(clasesCirculos["inactivo"]);
        } else if (parametro === "space_capsule") {
            set_clases_circulo_launch_vehicle(clasesCirculos["inactivo"]);
            set_clases_circulo_spaceport(clasesCirculos["inactivo"]);
            set_clases_circulo_spacecapsule(clasesCirculos["activo"]);
        }
    }

    useEffect(() => {

        window.addEventListener("resize", () => {

            if (window.innerWidth < 550) {
                set_tamanio("mobile");

            }
            if (window.innerWidth >= 550 && window.innerWidth < 990) {
                set_tamanio("tablet");

            }
            if (window.innerWidth >= 990) {
                set_tamanio("laptop");
            }

        });

    }, [])

    return (
        <div className='mt-4 mt-sm-5'>
            <div className="d-lg-none">
                <ImagenTech abc={ubicacion} tamanio={tamanio} />
                <div id='circulosSeccionTecnologia' className="d-flex justify-content-center justify-content-lg-start mt-2 pt-sm-1 mt-sm-2 fs-10 fs-sm-8">
                    <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_launch_vehicle + " rounded-circle d-flex justify-content-center flex-column mx-2 "} onClick={() => { changeText("launch_vehicle"); cambiar_clases_circulos("launch_vehicle"); set_ubicacion("launch_vehicle") }}><span className="" >1</span></div>
                    <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_spaceport + " rounded-circle d-flex justify-content-center flex-column mx-2"} onClick={() => { changeText("spaceport"); cambiar_clases_circulos("spaceport"); set_ubicacion("spaceport") }}><span className="" >2</span></div>
                    <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_spacecapsule + " rounded-circle d-flex justify-content-center flex-column mx-2"} onClick={() => { changeText("space_capsule"); cambiar_clases_circulos("space_capsule"); set_ubicacion("space_capsule") }} ><span className="" >3</span></div>
                </div>
                <p className='fs-10 fs-sm-8 mt-5  mb-2 text-white opacity-50  '>{subtitle}</p>
                <p className='fs-8 fs-sm-5 text-white'>{title}</p>
                <p className='fs-sm-11 text-blue-300-alt px-3'>{description}</p>

            </div>
            <div style={{ paddingLeft: "165px", height: "734px" }} className="d-none d-lg-block">
                <div className='d-flex flex-column justify-content-center h-100'>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6 px-0'>
                                <div className="d-flex justify-content-center flex-column h-100">
                                    <div style={{height: "300px"}} className="d-flex justify-content-between ">
                                        <div id='circulosSeccionTecnologiaLaptop' className="d-flex justify-content-between flex-column fs-6 pe-5 me-3">
                                            <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_launch_vehicle + " rounded-circle d-flex justify-content-center flex-column mx-2 "} onClick={() => { changeText("launch_vehicle"); cambiar_clases_circulos("launch_vehicle"); set_ubicacion("launch_vehicle") }}><span className="" >1</span></div>
                                            <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_spaceport + " rounded-circle d-flex justify-content-center flex-column mx-2"} onClick={() => { changeText("spaceport"); cambiar_clases_circulos("spaceport"); set_ubicacion("spaceport") }}><span className="" >2</span></div>
                                            <div style={{ width: widthHightCircles[tamanio], height: widthHightCircles[tamanio] }} className={clases_circulo_spacecapsule + " rounded-circle d-flex justify-content-center flex-column mx-2"} onClick={() => { changeText("space_capsule"); cambiar_clases_circulos("space_capsule"); set_ubicacion("space_capsule") }} ><span className="" >3</span></div>
                                        </div>
                                        <div className='text-start'>
                                            <p className='fs-6 mb-0 text-white opacity-50  '>{subtitle}</p>
                                            <p className='fs-4 text-white'>{title}</p>
                                            <p className='fs-10 text-blue-300-alt '>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 ps-5 pe-0'>
                                <ImagenTech abc={ubicacion} tamanio={tamanio} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Tecnologia;