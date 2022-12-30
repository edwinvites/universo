import React from "react";
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
        <section id="fondos_del_espacio" style={style} className="text-center d-flex flex-column justify-content-between vh-100 ps-3 pe-3">
            <Nav />
            <div className="d-flex flex-column justify-content-between">
            <p className='letra-gris-oscura mt-3 text-lila barlow-condensed'>SO, YOU WANT TO TRAVEL TO</p>
            <p className=' text-light letra-bellefair tamanio-titulo '>SPACE</p>
            <p className='text-white  ms-1 me-1 fs-7 text-white-50 text-lila'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            
            <div className='mx-auto mt-4 pt-4 fs-3 pb-4 bg-none h-25 w-25 d-flex flex-column justify-content-center mt-3 mb-3'>
                <div className="position-relative pb-4">
                    <img src={circulo} className=" position-absolute start-50 top-50 translate-middle" />
                </div>
            </div>
        </section>
    );
}

export default Home;