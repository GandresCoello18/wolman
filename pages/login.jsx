import React from "react";
import Head from '../components/Header';
import Footer from '../components/footer';
import { Icon } from "semantic-ui-react";
import Seo from '../components/seo';
import Feeback from '../components/feeback';
import "../assets/styles/container/login.scss";
const { setCookie } = require('../util/cookie');
const { dominio_developer, dominio_production } = require('../util/domino');
import axios from 'axios';



class Login extends React.Component {
    state = {
        feeback: false,
        header: '',
        content: ''
    }

    Ventana_Crear = () => {
        var ventana_session = document.querySelector('.fila_acceder_cuenta');
        var ventana_crear = document.querySelector('.fila_crear_cuenta');
        
        ventana_session.style.display = "none";
        ventana_crear.style.display = "block";
        ventana_crear.style.top = "0px";
        ventana_crear.style.width = "100% !important";
        console.log("primera");
    }
    
    Ventana_Session = () => {
        var ventana_session = document.querySelector('.fila_acceder_cuenta');
        var ventana_crear = document.querySelector('.fila_crear_cuenta');
        
        ventana_session.style.display = "block";
        ventana_crear.style.display = "none";
    
        console.log("segunda");
    }
    
    google = async () => {
        window.open('/api/auth/google', 'Entrar con Google', "width=620,height=600,scrollbars=NO");
    }
    
    twitter = async () => {
        window.open('/api_T/auth/twitter', 'Entrar con twitter', "width=620,height=600,scrollbars=NO");
    }
    
    facebook = async () => {
        window.open('/api_F/auth/facebook', 'Entrar con Facebook', "width=620,height=600,scrollbars=NO");
    }
    

    registro = async () => {
        let nombre = document.getElementById('nombre-registro').value;
        let correo = document.getElementById('correo-registro').value;
        let clave = document.getElementById('clave-registro').value;
        let confir_clave = document.getElementById('confir-clave-registro').value;
    
        if(nombre == '' || correo == '' || clave == '' || confir_clave == ''){
            this.cambios_de_estado('Campos Vacios', 'Se detectaron campos vacios, por favor revise y vuelva ha intentarlo');
        }else{
            if(clave != confir_clave){
                this.cambios_de_estado('Error', 'Las contraseñas no son iguales, por favor revise y vuelva ha intentarlo');
            }else{
                if(clave.length >= 7){
                    
                    const re = await axios({
                        method: 'post',
                        url: `${dominio_developer()}/api/usuario`,
                        data: {
                            nombre, correo, clave, id_metodo: 4
                        }
                    });
                    console.log(re);
                    this.cambios_de_estado('Exito','Cuenta creada con exito, sus credenciales fueron registradas');

                }else{
                    this.cambios_de_estado('Error', 'La contraseña se necesitan 7 caracteres o mas, revise y vuelva ha intentarlo');
                }
            }
        }
    }

    acceder = async () => {
        let email = document.getElementById('email-acceso').value;
        let pass = document.getElementById('pass-acceso').value;

        if(email != '' || pass != ''){
            const log = await axios({
                method: 'post',
                url: `${dominio_developer()}/api/login/autenticacion`,
                data: {
                    correo: email,
                    clave: pass
                }
            });
            console.log(log);
            setCookie('access-token', log.data.token);

            this.cambios_de_estado('Exito', 'Espere mientras es direccionado a la seccion clases');
            window.location.href = '/clases';
        }else{
            this.cambios_de_estado('Error', 'Se detectaron campos vacios, por favor revise y vuelva ha intentalo');
        }
    }

    cambios_de_estado = (t,c) => {
        this.setState({
            feeback: true,
            header: t,
            content: c
        });
    }

    validar_open_modal = () => {
        this.setState({ feeback: false });
    }

    render(){
        return(
            <>
                { this.state.feeback && <Feeback modal={true} titulo={this.state.header} contenido={this.state.content} validar_padre={this.validar_open_modal} /> }
                <Seo title='Login | Wolman web' />
                <Head />
                <section className="area_login">
                    <div className="row justify-content-center mt-md-3 fila_acceder_cuenta">
                        
                        <div className="col-12 col-md-4 izquierda">
                            <h5 className="text-center mt-1 mt-md-5">Bienvenido a Social-Students</h5>
                            <p className="p-2 text-center">
                                Aprende Desarrollo Web totalmente gratis. S-S decea que tenga un conocimiento exacto.
                            </p>
                            <sapn className="btn_crea_una_cuenta" onClick={this.Ventana_Crear}>
                                Crea una cuenta
                            </sapn>
    
                            <svg height="100" width="100" id="circle_abajo_iniciar">
                                <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                            </svg>
    
                        </div>
                        <div className="col-12 col-md-4 derecha">
    
                        <svg height="100" width="100" id="circle_arriba_iniciar">
                            <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                        </svg>
    
                            <h3 className="text-center">Iniciar Session</h3>
    
                                <div className='row justify-content-center session-redes p-1'>
                                    <div onClick={this.google} className='col-2 p-2'>
                                        <Icon name='google' size='big' />
                                    </div>
                                    <div onClick={this.facebook} className='col-2 p-2'>
                                        <Icon name='facebook official' size='big' />
                                    </div>
                                    <div onClick={this.twitter} className='col-2 p-2'>
                                        <Icon name='twitter' size='big' />
                                    </div>
                                </div>
    
                            <p className="p-2">Tu conocimiento espera..!</p>
                            <form>
                                <input type="email" id='email-acceso' className="form-control" placeholder="Usuario:" required /><Icon name="user" className="icon_user"/>
                                <input type="password" id='pass-acceso' className="form-control mt-3" placeholder="Contraseña:" required /><Icon name="eye" className="icon_eye" />
                                <span className="btn_acceder_cuenta" onClick={this.acceder}>
                                    Acceder
                                </span>
                            </form>
                        </div>
                    </div>
    
                    <div className="row justify-content-center mt-md-3 fila_crear_cuenta">
                        <div className="col-12 col-md-4 izquierda">
                            <h5 className="text-center">Bienvenido a Social-Students</h5>
                            <p className="p-2 text-center">
                                Aprende Desarrollo Web totalmente gratis. S-S decea que tenga un conocimiento exacto.
                            </p>
                            <sapn className="btn_crea_una_cuenta" onClick={this.Ventana_Session}>
                                Iniciar Session
                            </sapn>
    
                            <svg height="100" width="100" id="circle_abajo_iniciar">
                                <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                            </svg>
    
                        </div>
                        <div className="col-12 col-md-4 derecha">
    
                            <svg height="100" width="100" id="circle_arriba_iniciar">
                                <circle cx="50" cy="50" r="40" stroke-width="3" fill="#0F755A" />
                            </svg>
    
                            <h3 className="text-center">Crea una cuenta</h3>
                            <p className="p-2">Solo tomara 1 minuto</p>
                            <form>
                                <input type="text" id='nombre-registro' className="form-control" placeholder="Usuario:" />
                                <input type="email" id='correo-registro' className="form-control mt-3" placeholder="Correo:" required />
                                <input type="password" id='clave-registro' className="form-control mt-3" placeholder="Contraseña:" required />
                                <input type="password" id='confir-clave-registro' className="form-control mt-3" placeholder="Confirmar Contraseña:" required />
                                <span className="btn_acceder_cuenta" onClick={this.registro}>
                                    Registrarme
                                </span>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}

export default Login;