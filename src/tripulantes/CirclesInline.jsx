import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function CirclesInline({ staff, establecer_staff }) {
  return (
    <div
      className="d-flex justify-content-center justify-content-xl-start pt-4 pt-sm-5 mt-sm-2"
      id="circlesCrew"
    >
      <span
        className={
          (staff === "douglas-hurley" ? "bg-white" : "bg-white opacity-50") +
          "\t rounded-circle mx-2 ms-xl-0 me-xl-4 "
        }
        onClick={() => establecer_staff("douglas-hurley")}
      ></span>
      <span
        className={
          (staff === "mark-shuttleworth" ? "bg-white" : "bg-white opacity-50") +
          "\t rounded-circle mx-2 ms-xl-0 me-xl-4 "
        }
        onClick={() => establecer_staff("mark-shuttleworth")}
      ></span>
      <span
        className={
          (staff === "victor-glover" ? "bg-white" : "bg-white opacity-50") +
          "\t rounded-circle mx-2 ms-xl-0 me-xl-4 "
        }
        onClick={() => establecer_staff("victor-glover")}
      ></span>
      <span
        className={
          (staff === "anousheh-ansari" ? "bg-white" : "bg-white opacity-50") +
          "\t rounded-circle mx-2 ms-xl-0 me-xl-4 "
        }
        onClick={() => establecer_staff("anousheh-ansari")}
      ></span>
    </div>
  );
}

export default CirclesInline;
