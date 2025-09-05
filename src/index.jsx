import React, { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./home/Home";
// import fondo from "./destinos/moon/fondoLuna.svg";
import Destinos from "./destinos/Destinos";
import Crew from "./tripulantes/Crew";
import Tecnologia from "./technology/tecnologia";

// const imagenes = document.createElement("img")
// imagenes.src= fondo;
console.log(window.location.pathname);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <div className="bg-white fs-1">Sorry</div>,
  },
  {
    path: "/home",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/destinos",
    element: <App />,
    children: [
      {
        path: ":moon",
        element: <Destinos astro={"moon"} />,
      },
      {
        path: "moon/laptop",
        element: <Destinos astro={"moon"} />,
      },
      {
        path: "mars",
        element: <Destinos astro={"mars"} />,
      },
      {
        path: "mars/laptop",
        element: <Destinos astro={"mars"} />,
      },
      {
        path: "europa",
        element: <Destinos astro={"europa"} />,
      },
      {
        path: "europa/laptop",
        element: <Destinos astro={"europa"} />,
      },
      {
        path: "titan",
        element: <Destinos astro={"titan"} />,
      },
      {
        path: "titan/laptop",
        element: <Destinos astro={"titan"} />,
      },
    ],
  },
  {
    path: "/crew",
    element: <App />,
    children: [
      {
        path: "douglas-hurley",
        element: <Crew path={"douglas-hurley"} />,
      },
      {
        path: "douglas-hurley/tablet",
        element: <Crew path={"douglas-hurley/tablet"} />,
      },
      {
        path: "douglas-hurley/laptop",
        element: <Crew path={"douglas-hurley/laptop"} />,
      },
      {
        path: "mark-shuttleworth",
        element: <Crew path={"mark-shuttleworth"} />,
      },
      {
        path: "mark-shuttleworth/tablet",
        element: <Crew path={"mark-shuttleworth/tablet"} />,
      },
      {
        path: "mark-shuttleworth/laptop",
        element: <Crew path={"mark-shuttleworth/laptop"} />,
      },
      {
        path: "victor-glover",
        element: <Crew path={"victor-glover"} />,
      },
      {
        path: "victor-glover/tablet",
        element: <Crew path={"victor-glover/tablet"} />,
      },
      {
        path: "victor-glover/laptop",
        element: <Crew path={"victor-glover/laptop"} />,
      },
      {
        path: "anousheh-ansari",
        element: <Crew path={"anousheh-ansari"} />,
      },
      {
        path: "anousheh-ansari/tablet",
        element: <Crew path={"anousheh-ansari/tablet"} />,
      },
      {
        path: "anousheh-ansari/laptop",
        element: <Crew path={"anousheh-ansari/laptop"} />,
      },
    ],
  },
  {
    path: "/tecnologia",
    element: <App />,
    children: [
      {
        path: "",
        element: <Tecnologia section={"launch_vehicle"} />,
      },
    ],
  },
]);

// const NavigationContext = createContext("home");

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
