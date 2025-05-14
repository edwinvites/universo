import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Base from './base/Base';
import Moon from './destinos/moon/Moon';
import Home from './home/Home';
// import fondo from "./destinos/moon/fondoLuna.svg";
import Victor from './tripulantes/Victor';
import Destinos from './destinos/Destinos';

// const imagenes = document.createElement("img")
// imagenes.src= fondo;
console.log(window.location.pathname);


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Navigate to={"/home"} />
  }
    ,
  {
    path: "*",
    element: <div>No Found</div >
  }
    ,
  {
    path: "/:idhome",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "tamanioLaptop",
        element: <Home  />
      }
    ]
  }
  ,
  {
    path: "/destinos",
    element: <App/>,
    children: [
      {
        path: "moon",
        element: <Destinos astro={"moon"} />
      },
      {
        path: "moon/laptop",
        element: <Destinos astro={"moon"} />
      },
      {
        path: "mars",
        element: <Destinos astro={"mars"} />
      },
      {
        path: "mars/laptop",
        element: <Destinos astro={"mars"} />
      },
      {
        path: "europa",
        element: <Destinos astro={"europa"} />
      },
      {
        path: "europa/laptop",
        element: <Destinos astro={"europa"} />
      },
      {
        path: "titan",
        element: <Destinos astro={"titan"} />
      },
      {
        path: "titan/laptop",
        element: <Destinos astro={"titan"} />
      },

    ]
  },
  ]
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

