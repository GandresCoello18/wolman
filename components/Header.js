import React from "react";
import Seo from '../components/seo';
import NotificacionMenu from './notificacion_menu';
import SearchInput from './search_input';
import LabelAvatar from './label_avatar';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import Link from "next/link";
import "../assets/styles/components/header.scss";

class Head extends React.Component{
    state = {
        activeItem: 'home'
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
    
    render(){
        const { activeItem } = this.state;
        return(
            <>  
                <header className="container-fluid">
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
                                            <Dropdown.Item>Cambiar contraseña</Dropdown.Item>
                                            <Dropdown.Item>Modo Nocturno</Dropdown.Item>
                                            <Dropdown.Item>Mensajes Directos</Dropdown.Item>
                                            <Dropdown.Item>Ruta de Cursos</Dropdown.Item>
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

                                            <LabelAvatar />

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