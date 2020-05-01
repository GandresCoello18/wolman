const axios = require('axios');
const { getCookie } = require('./cookie');
const { dominio_developer } = require('./domino');


function anonimo_post(){
    return axios({
        method: 'post',
        url: `${dominio_developer()}/api/login/autenticacion`,
        data: { 
            correo: "anonimo@gmail.com",
            clave: "rottweilas"
        }
    });
}


function validar_vida_token(){
    return axios({
        method: 'get',
        url: `${dominio_developer()}/api/login/autenticacion`,
        headers: { "access-token": getCookie('access-token') }
    });
}

async function llamar_datos_generales_user(){
    return await axios({
        method: 'get',
        url: `${dominio_developer()}/api/usuario/mis-datos`,
        headers: { "access-token": getCookie('access-token') }
    });
}

module.exports = {
    anonimo_post,
    validar_vida_token,
    llamar_datos_generales_user
}