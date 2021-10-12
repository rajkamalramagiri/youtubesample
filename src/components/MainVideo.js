import React, { Component } from 'react';
class MainVideo extends Component {

render(){
const {search}=this.props;
const videoSrc = `https://www.youtube.com/embed/${this.props.videos?.id?.videoId}`


    return (
      <div>
            <div>

                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>

            </div>
      </div>
    );
}
}

export default MainVideo;