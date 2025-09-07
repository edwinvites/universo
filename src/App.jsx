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
import Home from "./home/Home";
import Tecnologia from "./technology/tecnologia";

function App() {

  const [ubication, set_ubication] = useState("home");

  const [astro, set_astro] = useState("moon");

  const [staff, set_staff] = useState("douglas-hurley");

  const [tecnologia, set_tecnologia] = useState("launch_vehicle");

  const establecer_astro = (astro) =>{
    set_astro(astro);
  }
  const establecer_ubicacion = (ubication) => {
    set_ubication(ubication);
  }
  const establecer_staff = (staff) => {
    set_staff(staff);
  }
  const establecer_tecnologia = (staff) => {
    set_tecnologia(staff);
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


  const  [type_width,set_type_width] = useState(window.innerWidth < 550 ? "small" : window.innerWidth < 1200 ? "medium" : "large"); 
  // // responsive en caso de redimensionamiento de la pantalla

  const set_type_width_handler = (innerWidth) => {
    let new_type_width = innerWidth < 550 ? "small" : innerWidth < 1200 ? "medium" : "large";
    console.log("trabaja");
    
    // set_type_width(new_type_width);
  }

  function handler_del_handler() {
    
  }

  useEffect(() => {
    const main_html = document.getElementById("principal");
    main_html.addEventListener("resize", set_type_width_handler);

    console.log("trabaja el use efect");
    

    return () => {
      main_html.removeEventListener("resize", set_type_width_handler);
    };
  }, [ubication]);

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
        backgroundImage: `url(${process.env.PUBLIC_URL + fondo[ubication][type_width]})`,
        backgroundSize: "cover",
      }}
      className="text-center "
    >
      <Nav ubicacion={ubication} seccion_callback={establecer_ubicacion}></Nav>
      <Subtitulo ubicacion={ubication} />
      {ubication === "home" && <Home astro={astro} establecer_astro={establecer_astro} seccion_callback={establecer_ubicacion}/>}
      {ubication === "destinos" && <Destinos astro={astro} establecer_astro={establecer_astro} />}
      {ubication === "crew" && <Crew staff={staff} establecer_staff={establecer_staff} />}
      {ubication === "tecnologia" && <Tecnologia tecnologia={tecnologia} establecer_tecnologia={establecer_tecnologia}/>}
      {/* <Outlet /> */}
    </main>
  );
}

export default App;
