import React from "react";
import NotificacionMenu from './notificacion_menu';
import SearchInput from './search_input';
import LabelAvatar from './label_avatar';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import Link from "next/link";
const { anonimo_post, validar_vida_token, llamar_datos_generales_user } = require('../util/peticiones');
const { getCookie, createCookie, setCookie } = require('../util/cookie');
import "../assets/styles/components/header.scss";



class Head extends React.Component{
    state = {
        activeItem: 'home',
        key: ''
    }

    componentDidMount(){

        llamar_datos_generales_user().then( data => {
            
            this.setState({
                key: data.data[0].id_user
            });
        
        }).catch( err => console.log(new Error(err) + 'error en pedir datos user head js'))

        validar_vida_token()
            .then( info => {
                console.log(info.data.feeback);
                
                if(info.data.feeback != 'Token activo'){
                    setCookie('access-token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoidnl2cHZnZHUtIiwiaWF0IjoxNTg4Mjg1NDIzfQ.TSwrmASJgoRxLxx3X5h-VDHlqbgiO01rwcEA77cBn-4`);
                }
            
            }).catch( err => console.log(new Error(err) + ' erro en function validar token' ));
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    open_notification = () => {
        var area_notification = document.querySelector('.area_notification');
        if(area_notification.style.display === 'none'){
            area_notification.style.display = 'block';
        }else{
            area_notification.style.display = "none";
        }
    }

    open = () => {
        var menu = document.querySelectorAll('.responsive-mobile');
        
        if(menu[0].style.display === ""){
            for(var i=0; i<menu.length; i++){
                menu[i].style.display = "block";
            }
        }else{
            for(var i=0; i<menu.length; i++){
                menu[i].style.display = "";
            }
        }
    }

    cerrar_session = () => {
        setCookie('access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoidnl2cHZnZHUtIiwiaWF0IjoxNTg4Mjg1NDIzfQ.TSwrmASJgoRxLxx3X5h-VDHlqbgiO01rwcEA77cBn-4');
        window.location.href = '/app';
    }
    
    render(){
        const { activeItem } = this.state;
        return(
            <>  
                <header className="container-fluid">
                <a href="https://www.freepik.es/fotos-vectores-gratis/negocios">Vector de Negocios creado por freepik - www.freepik.es</a>
                    <div className="row">
                        <nav className="col-12">
                            <div className="menu-hamburguesa" onClick={this.open}>
                                <Icon name="bars" size="large" style={{color: "white"}} />
                            </div>
                            <Menu style={{ margin:'0px' }} inverted pointing fluid stackable>
                                <Link href="/app">
                                    <a>
                                        <Menu.Item>
                                            <img src='https://react.semantic-ui.com/logo.png' />
                                        </Menu.Item>
                                    </a>
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item>
                                            <SearchInput placeholder='Que estas buscando...!' fluid />
                                        </Menu.Item>
                                    </a>
                                </Link>    
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            name='Inicio'
                                            className='mt-2'
                                            active={activeItem === 'Inicio'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        />
                                    </a>
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            name='Clases'
                                            className='mt-2'
                                            active={activeItem === 'Clases'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        />
                                    </a>
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            name='Proyectos'
                                            className='mt-2'
                                            active={activeItem === 'Proyectos'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        />
                                    </a>
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            name='Desafios'
                                            className='mt-2'
                                            active={activeItem === 'Desafios'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        />
                                    </a>
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            name='Blog'
                                            className='mt-2'
                                            active={activeItem === 'Blog'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        />
                                    </a>
                                </Link>
                                <a className="responsive-mobile">
                                    <Dropdown item text='Opciones' 
                                        className='mt-2'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Modo Nocturno</Dropdown.Item>
                                            <Dropdown.Item>Mensajes Directos</Dropdown.Item>
                                            <Dropdown.Item>Ruta de Cursos</Dropdown.Item>
                                            <Dropdown.Item onClick={this.cerrar_session}>Cerrar Session</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </a>    
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item 
                                            className='mt-2'
                                            name="notificacion"
                                            active={activeItem === 'notificacion'}
                                            onClick={this.open_notification}
                                            as='span'
                                        >
                                            <Icon name="bell" /><span className="punto-bell"></span>
                                        </Menu.Item>

                                            <NotificacionMenu />
                                    </a>
                                
                                </Link>
                                <Link href="/app">
                                    <a className="responsive-mobile">
                                        <Menu.Item
                                            position='right'
                                            name='User'
                                            active={activeItem === 'User'}
                                            onClick={this.handleItemClick}
                                            as='span'
                                        >

                                            <LabelAvatar llave={this.state.key} />

                                        </Menu.Item>
                                    </a>
                                </Link>    
                            </Menu>
                        </nav>
                    </div>
                </header>  
            </>
        );
    }
}

export default Head;