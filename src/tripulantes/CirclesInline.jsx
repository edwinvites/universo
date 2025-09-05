import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class personas_visibles {
  constructor(douglas, mark, victor, anousheh) {
    this.douglas = douglas;
    this.mark = mark;
    this.victor = victor;
    this.anousheh = anousheh;
  }

  cambiarValores(douglas, mark, victor, anousheh) {
    this.douglas = douglas;
    this.mark = mark;
    this.victor = victor;
    this.anousheh = anousheh;
  }

  asignarValores(path) {
    switch (path) {
      case "home":
        this.cambiarValores(true, false, false, false);
        break;
      case "destinos":
        this.cambiarValores(false, true, false, false);
        break;
      case "crew":
        this.cambiarValores(false, false, true, false);
        break;
      case "tecnologia":
        this.cambiarValores(false, false, false, true);
        break;
      default:
        break;
    }
  }
}


function CirclesInline(props) {

    let nombre = props.path.split("/");


    let douglas, mark, victor, anousheh;
    switch (nombre[0]) {
        case "douglas-hurley":
            douglas = "bg-white";
            mark = "bg-white opacity-50";
            victor = "bg-white opacity-50";
            anousheh = "bg-white opacity-50";   
            break;
        case "mark-shuttleworth":
            douglas = "bg-white opacity-50";
            mark = "bg-white";
            victor = "bg-white opacity-50";
            anousheh = "bg-white opacity-50";
            break;
        case "victor-glover":
            douglas = "bg-white opacity-50";
            mark = "bg-white opacity-50";
            victor = "bg-white";
            anousheh = "bg-white opacity-50";
            break;
        case "anousheh-ansari":
            douglas = "bg-white opacity-50";
            mark = "bg-white opacity-50";
            victor = "bg-white opacity-50";
            anousheh = "bg-white";
            break;


        default:
            break;
    }

    return (

        <div className="d-flex justify-content-center justify-content-xl-start pt-4 pt-sm-5 mt-sm-2" id="circlesCrew">
            <Link to={"/crew/douglas-hurley"} ><div className={douglas +" rounded-circle mx-2 ms-xl-0 me-xl-4    "} ></div></Link>
            <Link to={"/crew/mark-shuttleworth"} ><div className={mark +" rounded-circle mx-2 mx-xl-4  "} ></div></Link>
            <Link to={"/crew/victor-glover"} ><div className={victor + " rounded-circle mx-2 mx-xl-4     "} ></div></Link>
            <Link to={"/crew/anousheh-ansari"} ><div className={anousheh + " rounded-circle mx-2 mx-xl-4     "} ></div></Link>
        </div>
    )
}


export default CirclesInline;