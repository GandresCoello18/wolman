import React from 'react';
import ItemBlog from '../components/item_blog';
import LabelAvatar from '../components/label_avatar';
import Fecha from '../components/fecha';
import Paginacion from '../components/paginacion';
import Link from 'next/link';
import LabelComentarios from '../components/label_comentarios';
import Head from '../components/Header';
import Seo from '../components/seo';
import Footer from '../components/footer';
import { Input } from 'semantic-ui-react';
import "../assets/styles/container/blog.scss";


class Blog extends React.Component{
    render(){
        return(
            <>
                <Seo title='Blog | Wolman web' />
                <Head />
                <section className='container-fluid'>
                    <div className='row'>

                            <div className="carousel-item active">
                                <img className="d-block w-100" src='blog/blog-1.jpg' alt="First slide" />
                                <div className='oscuro'>
                                    <div className='row justify-content-center'>
                                        
                                            <div class="carousel-caption d-none d-md-block mb-4">
                                                <Link href='/blog/item'>
                                                    <a>
                                                        <h2>Tres estrategias de marketing efectivas para acercarse a clientes B2B</h2>
                                                    </a>
                                                </Link>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <LabelAvatar />    
                                                    </div>
                                                    <div className='col'>
                                                        <Fecha />
                                                    </div>       
                                                    <div className='col'>
                                                        <LabelComentarios />
                                                    </div>                                   
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                    </div>
                </section>

                <section className='container'>
                    <div className='row mt-4 justify-content-center'>
                        <form className='col-7 mb-4'>
                            <Input action={{ icon: 'search' }} name='query' type='search' fluid placeholder='Buscar Post...' />
                        </form>
                        <div className='col-12 p-2'>
                            <ItemBlog />
                        </div>
                        <div className='col-12 p-2'>
                            <ItemBlog />
                        </div>
                        <div className='col-12 p-2'>
                            <ItemBlog />
                        </div>
                        <div className='col-12 p-2'>
                            <ItemBlog />
                        </div>
                        <div className='col-12 p-2'>
                            <ItemBlog />
                        </div>        
                    </div>

                    <div className='row mt-4 p-3'>
                        <Paginacion />
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}

export default Blog;