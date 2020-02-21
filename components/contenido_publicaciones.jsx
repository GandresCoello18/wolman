import React from "react";
import { Label } from "semantic-ui-react";

const Contenido = (props) => {
    return(
        <>
            <section id="area_contenido_publicacion">
                <h5 className="">Dudas de algunos lenguajes</h5>
                <Label floated='right' circular color='brown' key='brown' >
                                Software
                </Label>
                <Label floated='right' circular color='violet' key='violet' >
                                PHP
                </Label>
                <Label floated='right' circular color='teal' key='teal'>
                                React js
                </Label>
                <p className="p-3">Hola tengo una aplicacion echa en React y el backend queria realizarlo en PHP pero noce como puedo integrar estos 2 lenguajes distintos, he visto que existen librerias y dependencias para hacerlo pero no ce como implementarlos. Mechas gracias por su ayuda</p>
            </section>
        </>
    );
}

export default Contenido;