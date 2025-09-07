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
  useSearchParams,
} from "react-router-dom";
import Subtitulo from "./subtitulo/Subtitulo";
import { useMediaQuery } from "react-responsive";
import Destinos from "./destinos/Destinos";
import Crew from "./tripulantes/Crew";
import Home from "./home/Home";
import Tecnologia from "./technology/tecnologia";

function App({params}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [ubication, set_ubication] = useState(params.ubication || "home");

  const [astro, set_astro] = useState(params.astro || "moon");

  const [staff, set_staff] = useState(params.staff || "douglas-hurley");

  const [tecnologia, set_tecnologia] = useState(params.tecnologia || "launch_vehicle");
  
  const establecer_ubicacion = (ubication) => {
    set_ubication(ubication);
  };
  const establecer_astro = (astro) => {
    set_astro(astro);
  };
  const establecer_staff = (staff) => {
    set_staff(staff);
  };
  const establecer_tecnologia = (technology) => {
    set_tecnologia(technology);
  };

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
    },
  };

  const [type_width, set_type_width] = useState(
    window.innerWidth < 550
      ? "small"
      : window.innerWidth < 1200
      ? "medium"
      : "large"
  );
  // // responsive en caso de redimensionamiento de la pantalla

  useEffect(() => {
    
    let params = {ubication,astro,staff,tecnologia}
    
    setSearchParams(params);
  }, [ubication, astro, staff, tecnologia, searchParams, setSearchParams]);

  return (
    <main
      id="principal"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + fondo[ubication][type_width]
        })`,
        backgroundSize: "cover",
      }}
      className="text-center "
    >
      <Nav ubicacion={ubication} seccion_callback={establecer_ubicacion}></Nav>
      <Subtitulo ubicacion={ubication} />
      {ubication === "home" && (
        <Home
          astro={astro}
          establecer_astro={establecer_astro}
          seccion_callback={establecer_ubicacion}
        />
      )}
      {ubication === "destinos" && (
        <Destinos astro={astro} establecer_astro={establecer_astro} />
      )}
      {ubication === "crew" && (
        <Crew staff={staff} establecer_staff={establecer_staff} />
      )}
      {ubication === "tecnologia" && (
        <Tecnologia
          tecnologia={tecnologia}
          establecer_tecnologia={establecer_tecnologia}
        />
      )}
      {/* <Outlet /> */}
    </main>
  );
}

export default App;
