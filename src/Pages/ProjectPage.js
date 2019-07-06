import React, { Component } from 'react'
import {connect } from 'react-redux'



const mapStateToProps = (state) =>{
    return {
        projects : state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}
class ProjectPage extends Component {

    constructor(props){
        super(props);
      }

    componentDidMount() {
       
    }



    render() {
        const  projectId = this.props.match.params.projectId;
        const project = this.props.projects.filter(project => {
            if(project.id == projectId)
                return project
        })[0];

        console.log(project)

        return(
            <div>
                <img src={project.mainImage} width="200" height="200"/> 
                <h1>{project.title}</h1> 
                <br/>
                <h3>{project.keywords.toString()}</h3> 
                <br/>
                <h3>{project.content}</h3> 
                
            </div>
         
         
         )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
