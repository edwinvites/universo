import React from "react";

function DatosAstro({astro}) {

    
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
        <div className="container-fluid m-0 p-0 text-lila barlow-condensed">
            <div className=" justify-content-start d-none d-xl-flex">
                <div className=" ps-md-0 pe-md-5 ps-xxl-0 pe-xxl-5 me-xxl-5">
                    <p className="fs-13 my-3  my-sm-0 pt-sm-0 text-xl-start  espacio-entre-letras-punto-1">AVG. DISTANCE</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-xl-start mb-xl-0 lh-1">{data[astro].distance}</p>
                </div>
                <div className="text-lila ps-xxl-0 ps-xxl-5">
                    <p className="fs-13 my-3 pt-sm-0 my-sm-0  espacio-entre-letras-punto-1">EST. TRAVEL TIME</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-xl-start mb-xl-0 lh-1">{data[astro].time}</p>
                </div>
            </div>
            <div className="row m-0 pt-2 pt-sm-0 d-xl-none">
                <div className="col-12 col-sm-6 col-xl-4 text-lila pt-1 pb-2 py-sm-0 ps-xl-0 ">
                    <p className="fs-13 my-3  my-sm-0 pt-sm-0 text-xl-start  espacio-entre-letras-punto-1">AVG. DISTANCE</p>
                    <p className="fs-7 my-2 letra-bellefair text-white text-xl-start mb-xl-0 lh-1">{data[astro].distance}</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-4 pt-2 mt-sm-0 pb-2 py-sm-0 ps-xl-0">
                    <p className="fs-13 my-3 pt-sm-0 my-sm-0  espacio-entre-letras-punto-1">EST. TRAVEL TIME</p>
                    <p className="fs-7 my-2 letra-bellefair text-white mb-xl-0 lh-1">{data[astro].time}</p>
                </div>
            </div>

        </div>
    );
}

export default DatosAstro;