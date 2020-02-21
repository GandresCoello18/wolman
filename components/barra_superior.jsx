import React from "react";
import faker from "faker";
import _ from 'lodash';
import { Image, Button, Header, Icon, Modal, TextArea, Form, Input, Select, Label } from 'semantic-ui-react';

const countryOptions = [
    { key: 'af', value: 'JavaScript', text: 'JavaScript' },
    { key: 'af', value: 'PHP', text: 'PHP' },
    { key: 'af', value: 'Java', text: 'Java' },
    { key: 'af', value: 'React js', text: 'React js' },
    { key: 'af', value: 'React Router', text: 'React Router' },
    { key: 'af', value: 'Next js', text: 'Next js' },
    { key: 'af', value: 'Html y Css', text: 'Html y Css' },
    { key: 'af', value: 'Pre-procesadores', text: 'Pre-procesadores' },
    { key: 'af', value: 'Boostrap', text: 'Boostrap' },
    { key: 'af', value: 'Api Rest', text: 'Api Rest' },
    { key: 'af', value: 'Redux', text: 'Redux' },
    { key: 'af', value: 'Webpack', text: 'Webpack' },
    { key: 'af', value: 'MySQL', text: 'MySQL' },
    { key: 'af', value: 'MongoDB', text: 'MongoDB' },
    { key: 'af', value: 'Node js', text: 'Node js' },
    { key: 'af', value: 'Laravel', text: 'Laravel' },
    { key: 'af', value: 'Git - GitHub', text: 'Git - GitHub' },
    { key: 'af', value: 'Deploy - Now, Heroku, o AWS', text: 'Deploy - Now, Heroku o AWS' },
  ]

class BarraSuperior extends React.Component {
    render(){
        return(
            <>
                <div class="row barra_superior ml-1 border p-1 justify-content-center">
                    <div className="col-4 col-lg-7">
                        <Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" size="mini" /> 
                    </div>
                    <div className="col-8 col-lg-5">
    
                        <Modal size="tiny" centered trigger={
                            <Button floated="right" basic color='green'>
                                Publicar o Preguntar
                            </Button>} closeIcon>
                            <Header icon='file image outline' content='Crea tu publicación' />
                            <Modal.Content>

                                <Form>
                                    <Input type="text" fluid placeholder="Titulo de tu publicacion" />
                                    <TextArea placeholder="Descripcion de tu publicacion..." className="mt-3" />
                                    <div class="custom-file mt-4">
                                        <input type="file" class="custom-file-input" id="customFileLang" lang="es" multiple/>
                                        <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                                    </div>
                                    <Select placeholder='Lenguajes o Tecnologias' className="mt-3" options={countryOptions} />

                                    <Label>
                                        React js
                                    </Label>
                                    <Label>
                                        Redux
                                    </Label>

                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red'>
                                    <Icon name='remove' /> Cancelar
                                </Button>
                                <Button color='green'>
                                    <Icon name='checkmark' /> Subir
                                </Button>
                            </Modal.Actions>
                        </Modal>
    
                    </div>
                </div>
            </>
        );
    }
}

export default BarraSuperior;