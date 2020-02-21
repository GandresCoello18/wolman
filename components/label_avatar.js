import React from 'react';
import { Popup, Image } from 'semantic-ui-react';

const LabelAvatar = (props) => {
    return(
        <>
            <Popup
                key="Andres Coello"
                header="Andres Coello"
                trigger={<Image style={{ cursor: 'pointer' }} src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
            /> Andres Coello
        </>
    );
}

export default LabelAvatar;