import React,{Component} from 'react'


class Video extends Component{
    render(){
        const {url}=this.props.vid.snippet.thumbnails.medium;
        return(
            <div style={{display:'flex'}}>
                <img src={url}
                
                onClick={()=>this.props.onVideoSelected(this.props.vid)}
                />
            </div>
        )
    }
}

export default Video;