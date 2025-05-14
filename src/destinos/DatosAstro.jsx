import React from "react";

function DatosAstro(props) {

    console.log("props datos astro", props);
    
    let data =
    {
        "moon": {
            "distance": "384,400 KM",
            "time": "3 DAYS"
        },
        "mars": {
            "distance": "225 MIL KM",
            "time": "9 MONTHS"
        },
        "europa": {
            "distance": "628 MIL KM",
            "time": "3 YEARS"
        },
        "titan": {
            "distance": "1.6 BILLION KM",
            "time": "7 YEARS"
        }
    }


    return (
        <div className="container-fluid m-0 p-0 ">
            <div className=" justify-content-start d-none d-lg-flex">
                <div className="text-lila ps-md-0 pe-md-5 ps-xxl-0 pe-xxl-5 me-xxl-5">
                    <p className="fs-13 my-3  my-sm-0 pt-sm-0 text-lg-start barlow-condensed espacio-entre-letras-punto-1">AVG. DISTANCE</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-lg-start mb-lg-0 lh-1">{data[props.astro].distance}</p>
                </div>
                <div className="text-lila ps-xxl-0 ps-xxl-5">
                    <p className="fs-13 my-3 pt-sm-0 my-sm-0 text-lila barlow-condensed espacio-entre-letras-punto-1">EST. TRAVEL TIME</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-lg-start mb-lg-0 lh-1">{data[props.astro].time}</p>
                </div>
            </div>
            <div className="row m-0 pt-2 pt-sm-0 d-lg-none">
                <div className="col-12 col-sm-6 col-lg-4 text-lila pt-1 pb-2 py-sm-0 ps-lg-0 ">
                    <p className="fs-13 my-3  my-sm-0 pt-sm-0 text-lg-start barlow-condensed espacio-entre-letras-punto-1">AVG. DISTANCE</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-lg-start mb-lg-0 lh-1">{data[props.astro].distance}</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 pt-2 pt-sm-0 mt-sm-0 pb-2 py-sm-0 ps-lg-0">
                    <p className="fs-13 my-3 pt-sm-0 my-sm-0 text-lila barlow-condensed espacio-entre-letras-punto-1">EST. TRAVEL TIME</p>
                    <p className="fs-7 my-2 letra-bellefair text-white mb-lg-0 lh-1">{data[props.astro].time}</p>
                </div>
            </div>

        </div>
    );
}

export default DatosAstro;