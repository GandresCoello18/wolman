import React from "react";
import ReactAwesomePlayer from 'react-awesome-player';

class ContenidoFile extends React.Component{
    state = {
        options: {
          poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          subtitles: [{
              language: 'zh',
              url: "https://peng666.github.io/react-awesome-player/zh.vtt",
              label: "中文"
            },
            {
              language: 'en',
              url: "https://peng666.github.io/react-awesome-player/en.vtt",
              label: "EN"
          }],
          defaultSubtitle: 'en'
        }
      }
    
    render(){
        const { options } = this.state
        return(
            <>
                <section id="area_contenido_file">
                <ReactAwesomePlayer
                    options={options}
                    loadeddata={this.loadeddata}
                    canplay={this.canplay}
                    canplaythrough={this.canplaythrough}
                    play={this.play}
                    pause={this.pause}
                    waiting={this.waiting}
                    playing={this.playing}
                    ended={this.ended}
                    error={this.error}
                />
                </section>
            </>
        );
    }
}

export default ContenidoFile;