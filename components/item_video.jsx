import React from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Tab } from "semantic-ui-react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import "../assets/styles/components/item_video.scss";


class VideoItem extends React.Component{

    componentDidMount(){
        if (typeof navigator !== 'undefined') {
            require('codemirror/mode/xml/xml');
            require('codemirror/mode/javascript/javascript');
        }
    }

    render(){
        const panes = [
            { menuItem: 'Descripcion', render: () => <Tab.Pane>jQuery is a DOM manipulation library. It reads from and writes to the DOM. React uses a virtual DOM (a JavaScript representation of the real DOM). React only writes patch updates to the DOM, but never reads from it.</Tab.Pane> },
            { menuItem: 'Preguntas', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Enlaces', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'Codigo Fuente', render: () => <Tab.Pane>
                <CodeMirror
                    value="
                        var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
                            mode: 'javascript',
                            lineNumbers: true,
                        });
                        editor.save()"
                    options={{
                        mode: 'javascript',
                        theme: 'ayu-dark',
                        lineNumbers: true
                    }}
                />
            </Tab.Pane> },
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