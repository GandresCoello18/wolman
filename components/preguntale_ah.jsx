import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import Link from "next/link";

const Preguntale = (props) => {
    return(
        <>
            <Card fluid>
                <Card.Content>
                    <Card.Header className="text-center">Preguntale</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event style={{cursor: "pointer"}}>
                            <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Link href="/mensaje-directo">
                                <a>
                                    <Feed.Content>
                                        <Feed.Summary className="mt-2 ml-1 text-dark">
                                        &nbsp; Andres coello &nbsp; &nbsp;  <Icon name='comment alternate outline' /> <strong className='d-md-none'>Sigue escribiendo code...</strong>
                                        </Feed.Summary>
                                    </Feed.Content>
                                </a>
                            </Link>    
                        </Feed.Event>

                        <Feed.Event style={{cursor: "pointer"}}>
                            <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Link href="/mensaje-directo">
                                <a>
                                    <Feed.Content>
                                        <Feed.Summary className="mt-2 ml-1 text-dark">
                                        &nbsp; Andres coello &nbsp; &nbsp;  <Icon name='comment alternate outline' /> <strong className='d-md-none'>Sigue escribiendo code...</strong>
                                        </Feed.Summary>
                                    </Feed.Content>
                                </a>
                            </Link>    
                        </Feed.Event>

                        <Feed.Event style={{cursor: "pointer"}}>
                            <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Link href="/mensaje-directo">
                                <a>
                                    <Feed.Content>
                                        <Feed.Summary className="mt-2 ml-1 text-dark">
                                        &nbsp; Andres coello &nbsp; &nbsp;  <Icon name='comment alternate outline' /> <strong className='d-md-none'>Sigue escribiendo code...</strong>
                                        </Feed.Summary>
                                    </Feed.Content>
                                </a>
                            </Link>    
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        </>
    );
}

export default Preguntale;