import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ModeloProyect = (props) => {
    return(
        <>
            <section id="area_modelo_proyecto" className="p-3">
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Metodologia XP</Card.Header>
                    <Card.Meta>16 de junio del 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" size="mini" className="rounded-circle" />
                            &nbsp; &nbsp; Andres Coello
                        </a>
                    </Card.Content>
                </Card>
            </section>
        </>
    );
}

export default ModeloProyect;