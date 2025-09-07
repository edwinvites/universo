
const btn_explorer = `${process.env.PUBLIC_URL}/imagenes/botonExplorer.svg`;

function Home({astro, establecer_astro, seccion_callback }) {



  return (
    <div className="container-fluid px-4 pt-sm-5 mt-sm-5  pb-sm-5 px-xl-5 m-0   h-100  w-100 ">
      <div className="row m-0 p-0  h-100 m-0 px-xl-5 justify-content-xl-evenly">
        <div className="col-12  col-xl-6 px-0 h-60">
          <div className="d-flex flex-column justify-content-between  ">
            <p className=" mt-4 text-lila fs-11 fs-sm-7 espacio-entre-letras-punto-1 espacio-entre-letras-sm-punto-25 barlow-condensed text-xl-start">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className=" text-light letra-bellefair py-2 mb-0 fs-3 fs-sm-1 text-xl-start">
              SPACE
            </p>
            <p className=" fs-12 fs-sm-11 fs-xl-10 text-lila py-3 mb-0 py-sm-2  py-xl-0 mb-xl-0 lh-18 text-xl-start">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-4 px-0 py-5 caja_boton_explorer">
          <div className=" bg-none  w-100  d-flex  justify-content-center align-content-center h-100 w-100   ">
            <img
              id="imagenExplorer"
              src={btn_explorer}
              className="img-fluid  w-40 w-xl-100 rounded-circle explorer-shadow"
              alt=""
              onClick={()=>{seccion_callback("destinos")
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
