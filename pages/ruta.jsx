import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import ListCursosRutas from '../components/list-cursos-rutas';
import Head from '../components/Header';
import Footer from '../components/footer';
import Seo from '../components/seo';

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
        <>
            <Seo title='Ruta de aprendizaje | Wolman web' />
            <Head />
            <section className='container'>
                <div className='row justify-content-center mt-4'>
                    <div className='col-12 col-md-6'>

                        <Accordion styled>
                            <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                UI - interfaz de usuario  &nbsp; &nbsp; <Icon size='large' name='table' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Linea de comandos - Terminal &nbsp; &nbsp;  <Icon size='large' name='window maximize outline' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Control de versiones &nbsp; &nbsp;  <Icon size='large' name='git square' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 3}
                            index={3}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Frontend &nbsp; &nbsp; <Icon size='large' name='laptop' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 4}
                            index={4}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Base de datos  &nbsp; &nbsp; <Icon size='large' name='database' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 5}
                            index={5}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Backend &nbsp; &nbsp; <Icon size='large' name='server' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 5}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 6}
                            index={6}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Api Rest &nbsp; &nbsp;  <Icon size='large' name='connectdevelop' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 6}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 7}
                            index={7}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Virtualizacion  &nbsp; &nbsp; <Icon size='large' name='codepen' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 7}>
                                <ListCursosRutas />
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 8}
                            index={8}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                Deploy - Servidores &nbsp; &nbsp; <Icon size='large' name='aws' />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 8}>
                                <ListCursosRutas />
                            </Accordion.Content>
                        </Accordion>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
  }
}