import React from 'react';
import axios from 'axios';
const { dominio_developer } = require('../util/domino');
import { Popup, Image } from 'semantic-ui-react';

class LabelAvatar extends React.Component {
    state = {
        foto_avatar: '/static/hombre-0.jpg',
        nombre_user: 'anonimo',
        key: 'pkx8otovU'
    }

    componentDidMount(){
        setTimeout( async () => {
            const av = await axios({
                method: 'get',
                url: `${dominio_developer()}/api/usuario/${this.props.llave}`
            });


            if(av.data[0] != undefined){
                this.setState({ 
                    foto_avatar: av.data[0].avatar,
                    nombre_user: av.data[0].nombre_usuario,
                    key: av.data[0].id_user
                });
            }
        },1000);
    }

    render(){
        return(
            <>
                <Popup
                    key={this.state.key}
                    header={this.state.nombre_user}
                    trigger={<Image style={{ cursor: 'pointer' }} src={this.state.foto_avatar} avatar />}
                /> {this.state.nombre_user}
            </>
        );
    }
}

export default LabelAvatar;