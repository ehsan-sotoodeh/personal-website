import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


export default function MyProjectsComponent({projects}){
    if(projects.length === 0){
        return (
            <p>
                no project yet
            </p>
        )
    }

    let projectsJSX = projects.map(project => {
        return (<Project className="my-4" key={"projectId"+project.id} project={project} />)
    });


    return(
              <div className="myProjectsComponent arlo_tm_section" id="projects">
                      <div className="arlo_tm_services_wrap">
                          <div className="container">
                              <div className="arlo_tm_title_holder">
                                  <h3>Projects</h3>
                                  <span>Click to know more </span>
                              </div>

                                {projectsJSX}

                          </div>
                      </div>
                  </div>
    );
  }
  
  function Project({project}){
    let keywordsJSX = project.keywords.map((keyword,index )=>{
        return(<span key={keyword + index} className="badge badge-info p-1 mr-2">{keyword}</span>)
    })
    return(
        <NavLink project={project} exact to={
                {
                    pathname: "/project/" + project.id,
                    project:{project}
                }
                }>
            <div  className="mb-2">
                <div className="media text-dark">
                    <div className="media-figure d-none d-sm-block">
                        <img class="fluid" src={project.mainImage} alt={"image of " + project.title} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-title"><strong>{project.title}</strong></h4>
                        <p>{project.shortDescription}</p>
                        <hr/>
                        <p>
                            {keywordsJSX}
                        </p>
                    </div>

                </div>
            </div>
        </NavLink>
    )
  }