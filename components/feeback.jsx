import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Feeback extends React.Component{
    state = {
        cambio: false
    }

    componentDidMount(){
        this.setState({
            cambio: this.props.modal
        });
    }

    cerrar = () => {
        this.setState({
            cambio: false
        });
        this.props.validar_padre();
    }


    render(){
        return(
            <>
                <Modal centered={true} open={this.state.cambio} basic size='small'>
                    <Header icon='archive' content={this.props.titulo} />
                    <Modal.Content>
                    <p>
                        {this.props.contenido}
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' inverted onClick={this.cerrar}>
                            <Icon name='checkmark' /> Aceptar
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}

export default Feeback;