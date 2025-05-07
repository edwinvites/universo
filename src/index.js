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
import fondo from "./destinos/moon/fondoLuna.svg";
import Victor from './tripulantes/Victor';

// const imagenes = document.createElement("img")
// imagenes.src= fondo;
console.log(window.location.pathname);


const router = createBrowserRouter(
  [{
    path: "/",
    element: <Navigate to={"/home"}/>
  }
    ,
    {
      path: "/:idhome",
      element: <App></App>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "tamanioLaptop",
          element: <Home fondo={"tamanioLaptop"}/>
        },
        {
          path: "destinos/:destinosId",
          element: <Moon  />
        }
      ]
    }
  ]
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}  />
  </>
);

