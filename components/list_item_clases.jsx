import React from "react";
import { Segment, Icon } from 'semantic-ui-react';
import "../assets/styles/components/list_item_class.scss";

const ListItemClass = (props) => {
    return(
        <>
            <section id="area_list_item_class">
                <Segment.Group>
                    <Segment color="teal" basic className="pointer"><Icon name="play" color="teal"/> Introduccion</Segment>
                    <Segment color="teal" basic className="pointer"><Icon name="play" color="teal"/> Que es React js</Segment>
                    <Segment className="pointer"><Icon name="play" /> Ciclo de vida</Segment>
                    <Segment className="pointer"><Icon name="play" /> State y props</Segment>
                    <Segment className="pointer"><Icon name="play" /> Que son Componente</Segment>
                    <Segment className="pointer"><Icon name="play" /> tipo clase o funcion</Segment>
                </Segment.Group>
            </section>
        </>
    );
}

export default ListItemClass;