import React, { Component } from 'react'
import { InputGroup,  Input } from 'reactstrap';
import ConnectModal from './Modal';
import {connect} from 'react-redux'
import Cart from './Cart';
import Star from './Star';
import {getrating} from '../actions/actions'



class Movielist extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            TextSearching:''
        }
    }
    handleSearch=(e)=>{
        this.setState({
            TextSearching: e.target.value
        })
    }
    
    render() {
        return (
        <div className="movielist">
            <div className="navbar">
            <div className="searchbar">
                 <div className="search"><InputGroup>
                 <Input placeholder="Search movie..." onChange={(e)=>this.handleSearch(e)}/>
                 </InputGroup></div>
                 <ConnectModal /> 
            </div>
            <div className="rating"><span>Minimum Rating</span><Star rating={this.props.rating} filter={this.props.getrating}/></div>
            </div>
            <div className="main">
                
                {this.props.movies.filter(el=> el.rat>=this.props.rating && el.title.toUpperCase().includes(this.state.TextSearching.toUpperCase().trim())).map(el => <Cart info={el} />)}
            </div>
        
        </div>
        )
    }
}

const mapStateToProps = state => ({movies: state.reduce,
                                    rating: state.ratreduce}
                                    )

const mapDispatchToProps=dispatch=>({
getrating: payload => dispatch(getrating(payload))
                                      })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movielist)