import React from "react";
import { Button, Modal } from "semantic-ui-react";

class Encuesta extends React.Component {

    componentDidMount(){
        var btn_encuesta = document.querySelector('.btn_encuesta');
        btn_encuesta.click();
    }

    render(){
        return(
            <>
                <Modal
                    trigger={<Button className="btn_encuesta" style={{display: "none"}}>Open Modal Encuesta</Button>}
                    header='Tomate tu tiempo'
                    centered
                    content={
                        <iframe src="https://docs.google.com/forms/d/11-Y4X5BFphq6Bi2tgr3atdF-es-Jc4JLFIT0kH2emIQ/viewform?embedded=true" style={{width: "90%", height: "100%", margin: 'auto', position: 'relative'}}>
                            ....Cargando....
                        </iframe>
                    }
                />
            </>
        );
    }
}

export default Encuesta;