import React from "react";
import { Tab } from "semantic-ui-react";
import "../assets/styles/components/item_video.scss";

class VideoItem extends React.Component{

    render(){
        const panes = [
            { menuItem: 'Descripcion', render: () => <Tab.Pane>jQuery is a DOM manipulation library. It reads from and writes to the DOM. React uses a virtual DOM (a JavaScript representation of the real DOM). React only writes patch updates to the DOM, but never reads from it.</Tab.Pane> },
            { menuItem: 'Preguntas', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Enlaces', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ];
        return(
            <>
                <section className='row' id="area_item_video">

                    <video
                        id="my-video"
                        class="col-12 video-js"
                        controls
                        preload="auto"
                    >
                        <source src="prueba.mp4" type="video/mp4" />
                    </video>

                
                    <div className="mt-4">
                        <Tab panes={panes} defaultActiveIndex={2} />
                    </div>
                </section>
            </>
        );
    }
}

export default VideoItem;