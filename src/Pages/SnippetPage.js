import React, { Component } from 'react'
import {connect } from 'react-redux'



const mapStateToProps = (state) =>{
    return {
        snippets : state.snippets
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}
class SnippetPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            errorMessage : "",
            editableMoudules : ["title","keywords","content"] , 
            editedVersion : {"title":"","keywords":"","content":""}
        }
        this.snippet = {};



      }

    componentDidMount() {
       
    }



    render() {
        return( <h1> Loading... </h1> )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SnippetPage);
