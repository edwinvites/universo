function ChangeTech({ tecnologia, establecer_tecnologia }) {
  const estilos_circulo =
    "\t  rounded-circle d-flex justify-content-center flex-column mx-2 my-xl-3 seleccionador_tecnologia";

  return (
    <div
      id="circulosSeccionTecnologia"
      className="d-flex flex-xl-column justify-content-center justify-content-xl-start mt-2 py-3 pt-sm-1  mt-sm-2 py-md-3 mt-md-2 fs-10 fs-sm-8 text-white"
    >
      <div
        className={
          (tecnologia === "launch_vehicle"
            ? "text-black bg-white"
            : "border border-dark-subtle") + estilos_circulo
        }
        onClick={() => {
          establecer_tecnologia("launch_vehicle");
        }}
      >
        <span className="">1</span>
      </div>
      <div
        className={
          (tecnologia === "spaceport"
            ? "text-black bg-white"
            : "border border-dark-subtle") + estilos_circulo
        }
        onClick={() => {
          establecer_tecnologia("spaceport");
        }}
      >
        <span className="">2</span>
      </div>
      <div
        className={
          (tecnologia === "space_capsule"
            ? "text-black bg-white"
            : "border border-dark-subtle") + estilos_circulo
        }
        onClick={() => {
          establecer_tecnologia("space_capsule");
        }}
      >
        <span className="">3</span>
      </div>
    </div>
  );
}

export default ChangeTech;
