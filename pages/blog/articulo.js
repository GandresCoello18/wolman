import React from 'react';
import Seo from '../../components/seo';
import Head from '../../components/Header';
import Fecha from '../../components/fecha';
import Like from '../../components/btn-like';
import Comentarios from '../../components/comentarios_video_item';
import LabelAvatar from '../../components/label_avatar';
import LabelComentarios from '../../components/label_comentarios';
import { Button } from 'semantic-ui-react';
import "../../assets/styles/container/articulo.scss";

class Articulo extends React.Component{
    render(){
        return(
            <>
                <Seo title='Blog | Wolman web' />
                <Head />
                <section className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 portada_articulo' style={{backgroundImage: 'url(../blog/blog-1.jpg)'}}>
                            <div className='capa_oscura'>
                                <h3 className='text-center text-white'>Como escojer bien un cliente</h3>
                                
                                <div className='row justify-content-center'>
                                    <div className='col-5 p-1 col-md-2 text-white'>
                                        <LabelAvatar />
                                    </div>
                                    <div className='col-5 p-1 col-md-2 text-white'>
                                        <Fecha />
                                    </div>
                                    <div className='col-5 p-1 col-md-2'>
                                        <Like />
                                    </div>
                                    <div className='col-5 p-1 col-md-2'>
                                        <LabelComentarios />
                                    </div>
                                </div>

                                <div className='row p-3 justify-content-center'>
                                    <div className='col-2 p-1'>
                                        <Button circular color='facebook' icon='facebook' />
                                    </div>
                                    <div className='col-2 p-1'>
                                        <Button circular color='twitter' icon='twitter' />
                                    </div>
                                    <div className='col-2 p-1'>
                                        <Button circular color='linkedin' icon='linkedin' />
                                    </div>
                                    <div className='col-2 p-1'>
                                        <Button circular color='green' icon='whatsapp' />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>

                <section className='container p-5 bg-white'>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8'>

                            <p className='p-1'>
                                Estás por comenzar tu propio emprendimiento… ¡Felicitaciones!<br/>
                                Ahora, una de las primeras decisiones que debes tomar es a quiénes está dirigido tu producto o servicio. Es decir, determinar el cliente o público (“Target”) que se quiere capturar y atraer. Esto es fundamental, así podrás optimizar costos y tiempos, enfocar tus esfuerzos y ajustar los productos o servicios para ese público definido.
                            </p>

                            <p className='p-1'>
                                Si no conocemos quiénes son nuestros usuarios potenciales, ¿cómo vamos a poder crear y llevar a cabo un plan de marketing eficiente?
                                De hecho, ¿te has cuestionado en algún momento si a la gente sobre la que centras tus campañas de marketing y en la que inviertes tu presupuesto, verdaderamente le interesa tu oferta?
                            </p>

                            <p className='p-1'>El “mercado buscado” es el grupo que más probablemente compre el producto que tu empresa tiene para ofrecer. Entonces la mejor pregunta que puedes hacerte para identificar tu mercado buscado es:</p>

                            <p className='p-1'>¿Hay suficientes personas con voluntad y capacidad de comprar mi producto o servicio en la zona en la que voy a operar?</p>
                            
                            <h3>El usuario no siempre es el cliente</h3>
                            <hr/>

                            <p className='p-1'>Un error frecuente es pensar que el cliente es la misma persona que va a usar el producto. Por ejemplo: el asistente que compra la tinta para la impresora, lo hace con la tarjeta de la empresa y a pedido de su jefa (quien tampoco es la dueña de la tarjeta de crédito). O el caso del padre que compra un postre para su hijo…</p>

                        </div>
                    </div>

                    <div className='row justify-content-center mb-4 mt-4'>
                        <div className='col-12 col-md-8'>
                            <Comentarios />
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default Articulo;