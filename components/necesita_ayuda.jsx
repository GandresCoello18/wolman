import React from "react";
import LabelAvatar from './label_avatar';
import Fecha from './fecha';
import Link from 'next/link';
import "../assets/styles/components/necesita_ayuda.scss";
import { Card, Icon, Button, Label, Image } from 'semantic-ui-react';

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
];

const data = [0,0,0];

const NecesitaAyuda = (props) => {
    return(
        <>
            <article id="area_necesita_ayuda" className="mt-3 mt-md-0">
                <h5 className="text-center mt-2">Preguntas sin respuesta</h5>
                {data.map( valor => (
                    <Link href='/responder'>
                        <a>
                            <Card fluid>
                                <Card.Content header='About Amy'>
                                    <strong className="mt-2 titulo">Modelo de caja en CSS</strong>
                                    <Label floated='right' circular color='red' key='red' className="ml-5">
                                        CSS
                                    </Label>
                                </Card.Content>
                                <Card.Content description={description} />
                                <Card.Content extra>
                                    <LabelAvatar /> <span className="float-right"><Fecha /></span>
                                </Card.Content>
                            </Card>
                        </a>
                    </Link>       
                ))}
            </article>
        </>
    );
}

export default NecesitaAyuda;