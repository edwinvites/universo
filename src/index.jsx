import React, { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const params = Object.fromEntries( new URLSearchParams(window.location.search));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App params = {params} />,
  },

]);

// const NavigationContext = createContext("home");

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider> 
  </StrictMode>
);
