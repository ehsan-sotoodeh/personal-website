import React, { Component } from 'react'
import {connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'
import BlogPageNavbarComponent from '../components/BlogPageNavbarComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faEye} from '@fortawesome/free-solid-svg-icons'
import { Markup } from 'interweave';
import {fetchOneProjectById } from '../store/actions'



const mapStateToProps = (state) =>{
    return {
        projects : state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return{
      fetchOneProjectById(projectId){
        dispatch(fetchOneProjectById(projectId))
      }
    }
}
class ProjectPage extends Component {

    componentDidMount() {
      const  projectId = this.props.match.params.projectId;
      this.props.fetchOneProjectById(projectId);
      document.getElementById('root').scrollIntoView({ behavior: "smooth" });
    }



    render() {
        const  projectId = this.props.match.params.projectId;
        const project = this.props.projects.filter(project => {
            if(project.id === projectId)
                return project
        })[0];

        let keywordsJSX = project.keywords.map((keyword,index )=>{
            return(<span key={keyword + index} className="badge badge-success fontsize09 p-1 mr-2">{keyword}</span>)
        })
        project.content =  convertHTMLEntity(project.content);

        return(

              <div className="arlo_tm_content" >
                <BlogPageNavbarComponent />
                <div className="row">
                  {/* <div  className="primaryColor col-lg-3  col-xl-2 p-lg-0"  >
                    <ProjectPageLeftSidebarComponent preview={project.preview} source={project.source} />
                  </div> */}
                  <div className="arlo_tm_rightpart container col-12 p-5">
                    <div className="rightpart_inner h-100">
                        <ul className="text-left mt-4 noBullet">
                          <li>
                            <a className={"btn  pl-0 text-left " + ((project.source.length > 0)?" ":" disabled")} href={project.preview}><FontAwesomeIcon className="mr-3" icon={faEye} />Project Preview</a>
                          </li>
                          <li>
                            <a className={"btn  pl-0 text-left " + ((project.source.length > 0)?" ":" disabled")} href={project.source}><FontAwesomeIcon className="mr-3" icon={faCode} />Source Code</a>

                          </li>

                        </ul>


                    <div className="text-justify mt-3 ">
                        <h1 className="fontsize17" >{project.title}</h1> 
                        <br/>
                        <div >{keywordsJSX}</div> 
                        <br/>
                        <h3 className="fontsize10 lineHeight15" ><Markup allowElements={true} content={project.content} /> </h3> 
                        
                    </div>
                    

                    
                  
                    </div>
                  </div>
                    <FooterComponent />
                

                </div>
              </div>       
                
         )
        
    }
}

function convertHTMLEntity(text){
  const span = document.createElement('span');

  return text
  .replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
      span.innerHTML = entity;
      return span.innerText;
  });
}


export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
