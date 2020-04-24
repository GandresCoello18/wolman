import React from 'react';
import Helmet from 'next/head';


const SEO = (props) => {
    return(
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name='description' content='Aprende de aplicaciones y sitios web totalmente gratis. Wolman enseña - diseño de interfaz, frontend, backend, api rest, base de datos, servidores, deploy y mantenimiento.' />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
            </Helmet>
        </>
    );
}

export default SEO;