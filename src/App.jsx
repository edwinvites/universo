import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import {
  Link,
  Navigate,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Subtitulo from "./subtitulo/Subtitulo";
import { useMediaQuery } from "react-responsive";
import Destinos from "./destinos/Destinos";
import Crew from "./tripulantes/Crew";

function App(props) {

  const [ubication, set_ubication] = useState("home");

  const handler_son = (ubication) => {
    set_ubication(ubication);
  }


  // const navigate = useNavigate();

  // const isSmall = useMediaQuery({ maxWidth: 576 });
  // const isMedium = useMediaQuery({ minWidth: 577, maxWidth: 1199 });
  // const isLarge = useMediaQuery({ minWidth: 1200 });

  // const location = useLocation();
  // let path = location.pathname.split("/")[1];
  // let tamanio;
  // let [rutaFondo, setRutaFondo] = useState();
  // let [alturaMain, setAlturaMain] = useState();
  // useEffect(() => {
  //   // Para el comportamiento responsive

  //   console.log({ path });

  //   setRutaFondo(
  //     fondo[path][
  //       isSmall ? "small" : isMedium ? "medium" : isLarge ? "large" : null
  //     ]
  //   );
  //   // setAlturaMain(minimoAltura[location.pathname]);
  // }, [location]);

  const fondo = {
    home: {
      small: "/imagenes/BitmapespacioLaptop2.png",
      medium: "/imagenes/BitmapespacioLaptop2.png",
      large: "/imagenes/BitmapespacioLaptop.png",
    },
    destinos: {
      small: "/imagenes/fondolunamovil.png",
      medium: "/imagenes/fondoLunaMobile.png",
      large: "/imagenes/Bitmapfondo_destinos.png",
    },
    crew: {
      small: "/imagenes/backgroundCrew.png",
      medium: "/imagenes/backgroundCrew.png",
      large: "/imagenes/backgroundCrew.png",
    },
    tecnologia: {
      small: "/imagenes/technology.svg",
      medium: "/imagenes/technology.svg",
      large: "/imagenes/technology.svg",
    }
  };

  // responsive en caso de redimensionamiento de la pantalla

  // useEffect(() => {
  //   document.getElementById("titulo")?.addEventListener("resize", () => {
  //     if (window.innerWidth > 990 && window.location.pathname == "/home") {
  //       navigate("../tamanioLaptop");
  //     }

  //     if (
  //       window.innerWidth < 990 &&
  //       window.location.pathname == "/tamanioLaptop"
  //     ) {
  //       navigate("../home");
  //     }

  //     if (
  //       window.innerWidth < 576 &&
  //       (window.location.pathname == "/crew/douglas-hurley/tablet" ||
  //         window.location.pathname == "/crew/douglas-hurley/laptop")
  //     ) {
  //       navigate("../crew/douglas-hurley");
  //     }

  //     if (
  //       window.innerWidth >= 576 &&
  //       window.innerWidth <= 990 &&
  //       (window.location.pathname == "/crew/douglas-hurley" ||
  //         window.location.pathname == "/crew/douglas-hurley/laptop")
  //     ) {
  //       navigate("../crew/douglas-hurley/tablet");
  //     }

  //     if (
  //       window.innerWidth > 990 &&
  //       (window.location.pathname == "/crew/douglas-hurley/tablet" ||
  //         window.location.pathname == "/crew/douglas-hurley")
  //     ) {
  //       navigate("../crew/douglas-hurley/laptop");
  //     }

  //     if (
  //       window.innerWidth < 576 &&
  //       (window.location.pathname == "/crew/mark-shuttleworth/tablet" ||
  //         window.location.pathname == "/crew/mark-shuttleworth/laptop")
  //     ) {
  //       navigate("../crew/mark-shuttleworth");
  //     }

  //     if (
  //       window.innerWidth >= 576 &&
  //       window.innerWidth <= 990 &&
  //       (window.location.pathname == "/crew/mark-shuttleworth" ||
  //         window.location.pathname == "/crew/mark-shuttleworth/laptop")
  //     ) {
  //       navigate("../crew/mark-shuttleworth/tablet");
  //     }

  //     if (
  //       window.innerWidth > 990 &&
  //       (window.location.pathname == "/crew/mark-shuttleworth/tablet" ||
  //         window.location.pathname == "/crew/mark-shuttleworth")
  //     ) {
  //       navigate("../crew/mark-shuttleworth/laptop");
  //     }

  //     if (
  //       window.innerWidth < 576 &&
  //       (window.location.pathname == "/crew/victor-glover/tablet" ||
  //         window.location.pathname == "/crew/victor-glover/laptop")
  //     ) {
  //       navigate("../crew/victor-glover");
  //     }

  //     if (
  //       window.innerWidth >= 576 &&
  //       window.innerWidth <= 990 &&
  //       (window.location.pathname == "/crew/victor-glover" ||
  //         window.location.pathname == "/crew/victor-glover/laptop")
  //     ) {
  //       navigate("../crew/victor-glover/tablet");
  //     }

  //     if (
  //       window.innerWidth > 990 &&
  //       (window.location.pathname == "/crew/victor-glover/tablet" ||
  //         window.location.pathname == "/crew/victor-glover")
  //     ) {
  //       navigate("../crew/victor-glover/laptop");
  //     }

  //     if (
  //       window.innerWidth < 576 &&
  //       (window.location.pathname == "/crew/anousheh-ansari/tablet" ||
  //         window.location.pathname == "/crew/anousheh-ansari/laptop")
  //     ) {
  //       navigate("../crew/anousheh-ansari");
  //     }

  //     if (
  //       window.innerWidth >= 576 &&
  //       window.innerWidth <= 990 &&
  //       (window.location.pathname == "/crew/anousheh-ansari" ||
  //         window.location.pathname == "/crew/anousheh-ansari/laptop")
  //     ) {
  //       navigate("../crew/anousheh-ansari/tablet");
  //     }

  //     if (
  //       window.innerWidth > 990 &&
  //       (window.location.pathname == "/crew/anousheh-ansari/tablet" ||
  //         window.location.pathname == "/crew/anousheh-ansari")
  //     ) {
  //       navigate("../crew/anousheh-ansari/laptop");
  //     }
  //   });

  //   return () => {
  //     document.getElementById("titulo")?.addEventListener("resize", () => {});
  //   };
  // }, []);

  // let minimoAltura = {
  //   "/home": "820px",
  //   "/tamanioLaptop": "870px",
  //   "/destinos/moon": "1300px",
  //   "/destinos/moon/laptop": "1000px",
  //   "/destinos/mars": "1300px",
  //   "/destinos/mars/laptop": "1000px",
  //   "/destinos/europa": "1300px",
  //   "/destinos/europa/laptop": "1000px",
  //   "/destinos/titan": "1300px",
  //   "/destinos/titan/laptop": "1000px",
  //   "/crew/douglas-hurley": "1050px",
  //   "/crew/douglas-hurley/tablet": "950px",
  //   "/crew/douglas-hurley/laptop": "1250px",
  //   "/crew/mark-shuttleworth": "1050px",
  //   "/crew/mark-shuttleworth/tablet": "950px",
  //   "/crew/mark-shuttleworth/laptop": "1250px",
  //   "/crew/victor-glover": "1050px",
  //   "/crew/victor-glover/tablet": "950px",
  //   "/crew/victor-glover/laptop": "1250px",
  //   "/crew/anousheh-ansari": "1050px",
  //   "/crew/anousheh-ansari/tablet": "950px",
  //   "/crew/anousheh-ansari/laptop": "1250px",
  // };

  // const [section, setSection] = useState("home");
  // console.log({ rutaFondo });

  return (
    <main
      id="principal"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + fondo[ubication].small})`,
        backgroundSize: "cover",
      }}
      className="text-center "
    >
      <h1>{ubication}</h1>
      <Nav path={ubication} parentCallback={handler_son}></Nav>
      {/* <Subtitulo path={location.pathname} /> */}
      {/* <Outlet /> */}
    </main>
  );
}

export default App;
