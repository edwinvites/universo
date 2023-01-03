import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import ruta_imagen from "../recursos/imagenes/Bitmap.jpg";
import circulo from "./circulo.svg";
const mix_mode = "mix-blend-mode: difference";




function Home() {


    const style = {
        background: "no-repeat " + "url('./imagenes/Bitmap.jpg')",
        backgroundSize: "cover"

    }










    return (
        <section id="fondos_del_espacio" style={style} className="text-center d-flex flex-column justify-content-between  ps-3 pe-3">
            <Nav />
            <div className="d-flex flex-column justify-content-between">
            <p className='letra-gris-oscura mt-3 text-lila barlow-condensed'>SO, YOU WANT TO TRAVEL TO</p>
            <p className=' text-light letra-bellefair tamanio-titulo '>SPACE</p>
            <p className='text-white  ms-1 me-1 fs-7 text-white-50 text-lila'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            
            <div style={{height: "260px"}} className='mx-auto mt-4 pt-4 mb-4  pb-4 fs-3 bg-none  w-25 d-flex flex-column justify-content-center '>
                <div  className="position-relative ">
                    <Link className="text-decoration-none" to={"/destinos/luna"}>
                    <div style={{width:"150px", height:"150px", zIndex: 10}} className="bg-white rounded-circle position-absolute start-50 top-50 translate-middle d-flex justify-content-center align-items-center">
                    <p style={{zIndez: 100}} className="letra-bellefair text-black fs-5 p-0 m-0">EXPLORE</p>
                    </div>
                    
                    </Link>
                    
                </div>
            </div>
        </section>
    );
}

export default Home;