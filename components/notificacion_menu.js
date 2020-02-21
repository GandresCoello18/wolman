import React from 'react';
import { Menu, Popup, Image, Icon } from 'semantic-ui-react';

const Notificacion = (props) => {
    return(
        <>
            <div className="area_notification">
                <Menu vertical>
                    <div className="text-center p-2">Notificaciones</div>
                    <Menu.Item className="iten_notification">
                        <Popup
                            content="Elliot has been a member since July 2012"
                            key="Elliot Fu"
                            header="Elliot Fu"
                            trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                        /> 
                        <span style={{color: "#000"}}><b>Andres coello:</b> Ha subido una nueva publicacion. <Icon name="newspaper outline" /></span>
                    </Menu.Item>
                    <Menu.Item className="iten_notification">
                        <Popup
                        content="Elliot has been a member since July 2012"
                        key="Elliot Fu"
                        header="Elliot Fu"
                        trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                        /> <span style={{color: "#000"}}><b>Andres coello:</b> Ha subido una nueva publicacion. <Icon name="newspaper outline" /></span>
                    </Menu.Item>
                    <div className="text-center p-2">ver todos</div>
                </Menu>
            </div>
        </>
    );
}

export default Notificacion;