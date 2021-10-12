import React ,{Component} from 'react';

class Search extends Component{
    state={
        search:''
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({search:''})
        this.props.onSubmit(this.state.search)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Search...'
                value={this.state.search}
                onChange={this.handleChange}
                />
                </form>

            </div>
        )
    }
}

export default  Search;