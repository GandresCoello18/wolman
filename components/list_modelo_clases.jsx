import React from "react";
import Link from "next/link";
import { Image, Segment, Icon, Button } from "semantic-ui-react";

const ListModelClass = (props) => {
    return(
        <>
            <div className="area_list_model_class p-4" style={{backgroundColor: "white"}}>
                <Segment compact secondary color="teal">
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>

                <Link href="/proyecto-final">
                    <a>
                        <Button className="mt-3" style={{backgroundColor: "#18BE91", color: "white"}} fluid>Realizar Examen <Icon className="ml-3" name="flag outline" /> </Button>
                    </a>
                </Link>
                
            </div>
        </>
    );
}

export default ListModelClass;