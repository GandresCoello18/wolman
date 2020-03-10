import React from "react";
import Head from '../components/Header';
import Footer from '../components/footer';
import { Icon } from "semantic-ui-react";
import Seo from '../components/seo';
import "../assets/styles/container/login.scss";
import { Button } from 'semantic-ui-react';
import axios from 'axios';


const Ventana_Crear = () => {
    var ventana_session = document.querySelector('.fila_acceder_cuenta');
    var ventana_crear = document.querySelector('.fila_crear_cuenta');
    
    ventana_session.style.display = "none";
    ventana_crear.style.display = "block";
    ventana_crear.style.top = "0px";
    ventana_crear.style.width = "100% !important";
    console.log("primera");
}

const Ventana_Session = () => {
var ventana_session = document.querySelector('.fila_acceder_cuenta');
var ventana_crear = document.querySelector('.fila_crear_cuenta');

    ventana_session.style.display = "block";
    ventana_crear.style.display = "none";

    console.log("segunda");
}

const google = async () => {
    window.open('/api/auth/google', '_blank');
}

const twitter = async () => {
    window.open('/api_T/auth/twitter', '_blank');
}

const facebook = async () => {
    window.open('/api_F/auth/facebook', '_blank');
}

const Login = () => {
    return(
        <>
            <Seo title='Login | Wolman web' />
            <Head />
            <section className="area_login">
                <div className="row justify-content-center mt-md-3 fila_acceder_cuenta">
                
                    <div className="col-12 col-md-4 izquierda">
                        <h5 className="text-center mt-1 mt-md-5">Bienvenido a Social-Students</h5>
                        <p className="p-2 text-center">
                            Aprende Desarrollo Web totalmente gratis. S-S decea que tenga un conocimiento exacto.
                        </p>
                        <sapn className="btn_crea_una_cuenta" onClick={Ventana_Crear}>
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
                                <div onClick={google} className='col-2 p-2 border border-success rounded-pill'>
                                    <Icon name='google' size='large' />
                                </div>
                                <div onClick={facebook} className='col-2 p-2 border border-success rounded-pill'>
                                    <Icon name='facebook official' size='large' />
                                </div>
                                <div onClick={twitter} className='col-2 p-2 border border-success rounded-pill'>
                                    <Icon name='twitter' size='large' />
                                </div>
                            </div>

                        <p className="p-2">Tu conocimiento espera..!</p>
                        <form>
                            <input type="email" className="form-control" placeholder="Usuario:" required /><Icon name="user" className="icon_user"/>
                            <input type="password" className="form-control mt-3" placeholder="Contraseña:" required /><Icon name="eye" className="icon_eye" />
                            <span className="btn_acceder_cuenta">
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
                        <sapn className="btn_crea_una_cuenta" onClick={Ventana_Session}>
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
                            <input type="text" className="form-control" placeholder="Usuario:" />
                            <input type="email" className="form-control mt-3" placeholder="Correo:" required />
                            <input type="password" className="form-control mt-3" placeholder="Contraseña:" required />
                            <input type="password" className="form-control mt-3" placeholder="Confirmar Contraseña:" required />
                            <span className="btn_acceder_cuenta">
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

export default Login;