import React from "react";
import { Image, Rating, Popup } from "semantic-ui-react";
import "../assets/styles/components/modelo_clases.scss";

const ModelaClases = (props) => {
    return(
        <>
            <section id="area_modelo_clases" className="border mb-3">
                <div className="modelo_head p-3">
                    <strong className="titulo">Curso Practico de React JS</strong>
                    <strong className="categoria">Desarrollo Web</strong>
                </div>

                <div className="modelo_contenido">
                    <Image src="https://i.blogs.es/3cc483/1-hsisluifmo6kblfpoktlow/450_1000.jpeg" fluid />
                </div>

                <div className="modelo_pie p-3">
                    <div className="row justify-content-center">
                        <div className="col">
                            <p className="text-center">Videos: 10</p>
                        </div>
                        <div className="col">
                            <p className="text-center">Horas: 23</p>
                        </div>
                        <div className="col">
                            <p className="text-center">Comentarios: 42</p>
                        </div>
                        <div className="col">
                            <p className="text-center">Favoritos: 6</p>
                        </div>
                    </div>
                </div>
<hr/>
                <div className="dictado_por p-1 row">
                    <div className='col'>
                        Dictado por: &nbsp; &nbsp;
                        <Popup
                            content="Andres"
                            key="Andres"
                            header="Dictado"
                            trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                        />
                    </div>
                    <div className='col'>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                    </div>
                </div>

            </section>
        </>
    );
}

export default ModelaClases;