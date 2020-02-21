import React from 'react';
import "../assets/styles/components/mensaje-directo.scss";
import Head from '../components/Header';
import Footer from '../components/footer';
import { Comment, Header, Container, Image, FormField, TextArea, Button } from "semantic-ui-react";

const Mensaje = (props) => {
    return(
        <>
            <Head />
            <div className="row justify-content-center mt-2 p-4 area_mensaje_directo">
                <div className="col-12 col-md-4 scroll-chat border">
                    <Comment.Group size='small'>
                        <Header as='h3' dividing className="p-3">
                            Tus Chat:
                        </Header>

                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                        <Comment className='sombra'>
                            <Comment.Avatar as='a' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                            <Comment.Content>
                            <Comment.Author as='a'>Andres coello</Comment.Author>
                            <Comment.Metadata>
                                <span>ayer a 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Hola, te queria hacer una pregunta con respecto al curso de responsive desing</Comment.Text>
                            <Comment.Actions>
                                <a>entregado</a>
                            </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </div>
                <div className="col-12 mt-3 mt-md-0 col-md-8 border p-3 scroll-chat contenedor_de_sms">
                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="left" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>

                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="right" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>
                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="left" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>

                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="right" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>
                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="left" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>

                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="right" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>
                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="left" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>

                    <Container className="contenedor-sms mb-3 p-2">
                        <Image floated="right" size='mini' className='rounded-circle' src='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem quos iste suscipit atque a modi id illo architecto sit? Cum molestias perferendis quibusdam consectetur minus totam omnis explicabo! Itaque?</div>
                    </Container>

                    <div className="row justify-content-center area_create_sms">
                        <div className="col-12 col-md-9">
                          <TextArea className="form-control rounded" placeholder="Escribe tu mensaje aqui...!" />
                        </div>
                        <div className="col-12 col-md-3">
                            <Button fluid className="mt-4">Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Mensaje;