import React from "react";
import LabelAvatar from './label_avatar';
import Fecha from './fecha';
import BntLike from './btn-like';
import BtnFork  from './btn-fork';
import LabelComentarios from './label_comentarios';
import { Image, Icon, Button, Label, Container } from "semantic-ui-react";
import "../assets/styles/components/modelo_publicacion.scss";

const Modelo = ({children}) => {
    return(
        <>
            <article className="modelo-area_publicacion mb-3">
                <div className="row heaer_modelo">
                    <div className="col-7 col-lg-7">
                        <strong className='p-1'><LabelAvatar /></strong>
                    </div>
                    <div className="col-5 col-lg-5">
                        <Container textAlign='right' className='p-1 mr-5'> <strong><Fecha /></strong> </Container>
                    </div>
                </div>

                <hr/>

                <div className="row mt-2 p-3">
                    <div className="col-12">
                        {children}
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-4">
                                <BntLike />
                            </div>
                            
                            <div className="col-6 col-md-4">
                                <LabelComentarios />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Modelo;