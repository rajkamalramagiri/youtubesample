import React, {Component} from 'react'
import Video from './Video';

class Suggestions extends Component{
    render(){
        return(
            <div>
                <h2 className='header'>Suggestions</h2>
                {this.props.videos.map(vid=><Video 
                onVideoSelected={this.props.onVideoSelected}
                key={vid.id.videoId} vid={vid}/>)}
            </div>
        )
    }
}

export default Suggestions;