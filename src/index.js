import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Base from './base/Base';
import Moon from './destinos/moon/Moon';
import Home from './home/Home';
import fondo from "./destinos/moon/fondoLuna.svg";

// const imagenes = document.createElement("img")
// imagenes.src= fondo;
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App  />,
      children: [
        {
          path: "",
          element: <Home  />
        },
        {
          path: "destinos/:destinosId",
          element: <Moon  fondos={fondo} />
        },
      ],
    },
  ]
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}  />
  </>
);

