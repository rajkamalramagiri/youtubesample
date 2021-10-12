import React, { Component } from 'react';
import Search from './components/Search';
import MainVideo from './components/MainVideo';
import axios from 'axios';
import {youtube} from './api/api'
import Suggestions from './components/Suggestions';
import Video from './components/Video';
import './App.css'
class App extends Component {
  state = {
    videos:[],
    selectedVideos:[],
    search:'',
  
  }

  onVideoSelected=(vid)=>{
    console.log('selectedVideo',vid)
    this.setState({selectedVideos:vid})
  }


  handleSubmit=async (val)=>{
    this.setState({search:val})
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key:"AIzaSyCJtydm1_e8rNSwxEuSr0Omd32DWguQx84",
        q: this.state.search,
      }
    });
    console.log('resp',response)
    this.setState({videos:response.data.items,selectedVideos:response.data.items[0]})
  }

  async componentDidMount(){
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key:"AIzaSyCJtydm1_e8rNSwxEuSr0Omd32DWguQx84",
        q: 'sachin',
      }
    });
    this.setState({videos:response.data.items,selectedVideos:response.data.items[0]})
  }

  render() {
    return (
      <div>

       <h2 className='header'> Welcome to youtube</h2>
       <Search onSubmit={this.handleSubmit}/>
       <MainVideo search={this.state.search} videos={this.state.selectedVideos}/>
       <Suggestions videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
      </div>
    )
  }
}

export default App;

