import React from "react";
import ListItemClass from "../components/list_item_clases";
import Preguntale from "../components/preguntale_ah";
import ComentarioVideo from "../components/comentarios_video_item";
import ItemVideo from "../components/item_video";
import BarraSuperior from '../components/barra_superior';
import Head from '../components/Header';
import Footer from '../components/footer';

const Video = (props) => {

    return(
        <>
            <Head />
            <div className="container-fluid mt-4">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                        <div className="row">
                            <div className="col-12">
                                <ListItemClass />
                            </div>
                            <div className="col-12 mt-4">
                                <Preguntale />
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                        <BarraSuperior />

                        <div className="row mt-4">
                            <div className="col-12">
                                <ItemVideo />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                        <ComentarioVideo />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Video;