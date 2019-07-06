import React, { Component } from 'react'
import {connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import ProjectPageLeftSidebarComponent from '../components/ProjectPageLeftSidebarComponent'


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

        let keywordsJSX = project.keywords.map((keyword,index )=>{
            return(<span key={keyword + index} class="badge badge-success fontsize09 p-1 mr-2">{keyword}</span>)
        })
        return(

      <div className="arlo_tm_content" >
        <NavbarComponent />
        <div className="row">
          <div  className="primaryColor col-lg-3  col-xl-2 p-lg-0"  >
            <ProjectPageLeftSidebarComponent preview={project.preview} source={project.source} />
          </div>
          <div className="arlo_tm_rightpart col-lg-9 col-xl-10 p-lg-0">
            <div class="rightpart_inner h-100">
           
            <div className="text-justify m-5">
                <h1 className="fontsize17" >{project.title}</h1> 
                <br/>
                <div >{keywordsJSX}</div> 
                <br/>
                <h3 className="fontsize10 lineHeight15" >{project.content}</h3> 
                
            </div>
            
            <FooterComponent />

            
          
            </div>
          </div>
        

        </div>
      </div>       
         
         )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
