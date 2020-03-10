import React from 'react'
import { Card, Image,Button } from 'semantic-ui-react'
import LabelAvatar from './label_avatar';
import Fecha from './fecha';
import LabelComentario from './label_comentarios';
import LikeBtn from './btn-like';

const CardExampleLinkCard = () => (
  <Card fluid href='#card-example-link-card'>
      <Card.Content>
            <Card.Header>Tres estrategias de marketing efectivas para acercarse a clientes B2B</Card.Header>
            <Card.Description>Cuando algunas empresas piensan en estrategias de marketing B2B, piensan principalmente en técnicas directas y externas: mensajes que pueden enviar directamente a los clientes o posibles compradores que hayan identificado</Card.Description>
            <div className='row mt-3 justify-content-center'>
                <div className='col-5 col-md-3 p-1 p-md-0'>
                    <strong className='ml-md-3'><LabelAvatar/></strong>
                </div>
                <div className='col-5 col-md-3 p-1 p-md-0'>
                    <strong><Fecha /></strong>
                </div>
                <div className='col-5 col-md-3 p-1 p-md-0'>
                    <LabelComentario />
                </div>
                <div className='col-5 col-md-3 p-1 p-md-0'>
                    <LikeBtn />
                </div>
            </div>
      </Card.Content>

  </Card>
)

export default CardExampleLinkCard;