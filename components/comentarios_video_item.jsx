import React from "react";
import { Comment, Header, Button, Form } from 'semantic-ui-react';

const ComentarioVideo = (props) => {
    return(
        <>
            <div style={{backgroundColor: "white"}} className="p-3">
                <Comment.Group size='mini'>
                    <Header as='h3' dividing>
                        Comentarios
                    </Header>

                    <Form reply>
                        <Form.TextArea />
                        <Button content='Añadir Respuesta' labelPosition='left' icon='edit' primary />
                    </Form>

                    <Comment>
                        <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <Comment.Content>
                        <Comment.Author as='a'>Andres Coello</Comment.Author>
                        <Comment.Metadata>
                            <span>Hoy a las 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>Wou me gusto esa explicacion, muy emocionado</Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                            <span>5 days ago</span>
                        </Comment.Metadata>
                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </div>
        </>
    );
}

export default ComentarioVideo;