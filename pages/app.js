import React from "react";
import Head from '../components/Header';
import Footer from '../components/footer';
import PerfilVentana from "../components/perfil_ventaja";
import Preguntale from "../components/preguntale_ah";
import Necesita from "../components/necesita_ayuda";
import ContenidoPublicacion from "../components/contenido_publicaciones";
//import ContenidoPublicacionFile from "../components/contenido_publicaciones_file";
import ModeloPublicacion from "../components/modelo_publicacion";
import BarraSuperior from '../components/barra_superior';
import Encuesta from "../components/Encuesta-s-s";
import "../assets/styles/container/index.scss";
import "../index.scss";
import Seo from '../components/seo';
import Error from './_error.js';

class App extends React.Component{

    static getInitialProp({ res }){
            res.statusCode = 503;
            return { statusCode: 503 }
    }


    render(){
        if(this.props.statusCode == 503){
            return <Error statusCode={503} />
        }
        return(
            <>
                <Seo title='Wolman | Desarrollo Web | Aplicaciones y sitios' />
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
                                    <ModeloPublicacion>
                                        <ContenidoPublicacion />
                                    </ModeloPublicacion>

                                    <ModeloPublicacion>
                                    </ModeloPublicacion>

                                    
                                    <ModeloPublicacion>
                                    </ModeloPublicacion>

                                    
                                    <ModeloPublicacion>
                                    </ModeloPublicacion>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                            <Necesita />
                            <Necesita />
                        </div>
                    </div>
                </div>
                <Encuesta />

                <Footer />
            </>
        );
    }
}

export default App;