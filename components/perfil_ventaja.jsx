import React from "react";
import { Icon, Card, Image } from "semantic-ui-react";

const PerfilVentana = (props) => {
    return(
        <>
            <Card fluid>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg'
                    />
                    <Card.Header>Andres Coello</Card.Header>
                    <Card.Meta>Sigue escribiendo code..!</Card.Meta>
                    <Card.Description>
                        <div className="text-center">Reconocimiento</div>
                        <p className="text-center border_perfil"><span>11</span> &nbsp; <Icon name="star" /></p>

                        <div className="text-center">Comentarios</div>
                        <p className="text-center border_perfil"><span>7</span> &nbsp; <Icon name="comments" /></p>

                        <div className="text-center">Aportes</div>
                        <p className="text-center border_perfil"><span>3</span> &nbsp; <Icon name="file text" /> </p>

                        <h5 className="text-center cambiar_foto_perfil" style={{color: "teal", cursor: "pointer"}}>Cambiar Foto de Perfil</h5>
                    </Card.Description>
                </Card.Content>
            </Card>
        </>
    );
}

export default PerfilVentana;