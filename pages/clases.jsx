import React from "react";
import PerfilVentana from "../components/perfil_ventaja";
import Preguntale from "../components/preguntale_ah";
import Necesita from "../components/necesita_ayuda";
import ModeloClases from "../components/modelo_clases";
import BarraSuperior from '../components/barra_superior';
import Head from '../components/Header';
import Footer from '../components/footer';
import Link from "next/link"; 
import Seo from '../components/seo';
import { Image, Button } from 'semantic-ui-react';
import "../assets/styles/container/index.scss";
import "../index.scss";

const Clases = (props) => {
    return(
        <>
            <Seo title='Cursos | Wolman web' />
            <Head />
            <div className="container-fluid mt-4">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                        <div className="row">
                            <div className="col-12">
                                <PerfilVentana />
                            </div>
                            <div className="col-12 mt-4">
                                <Preguntale />
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                        <BarraSuperior />

                        <div className="row mt-3">
                            <div className="col-12">
                                <Link href="/lista-clases/10">
                                    <a>
                                        <ModeloClases />
                                    </a>
                                </Link>
                                <Link href="/lista-clases/10">
                                    <a>
                                        <ModeloClases />
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                        <Necesita />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Clases;