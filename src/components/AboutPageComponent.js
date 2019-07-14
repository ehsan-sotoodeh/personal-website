import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFileCode,faAt } from '@fortawesome/free-solid-svg-icons'

export default function AboutPageComponent(){
    return(
      <div className="arlo_tm_section relative aboutComponent" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
  
              <div className="rightbox text-justify">
                <div className="arlo_tm_mini_title_holder">
                  <h3>Hi, I'm Ehsan Sotoodeh</h3>
                  </div><br/><br/>
                <div className="definition">
                  <div>
                      I have a master's dgree in Computer Science and a bachlor's degree in IT (Web-based programming);
                       also, I have more than +4 years of experience as a <strong>Full-Stack Developer </strong>
                         working with :
                        <ul className="m-2">
                          <li>
                              JavaScript (+ES6), PHP, MySQL, JAVA, Python, Node.js
                          </li>
                          <li>
                              React.js, Redux, Express, Bootstrap, JQuery, JQuery UI, HTML5, CSS3,  RESTful API, Leaflet, Highcharts 
                          </li>
                          <li>
                              WordPress, Ubuntu, Adobe Photoshop, Version control (Git) ... 
                          </li>
  
                        </ul>
                   </div>
                   
                  
                  


                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span><label>City:</label> Vancouver, Canada</span>
                    </li>
                    <li>
                      <span><label>Degree:</label> Master in Computer Science</span>
                    </li>	
                    <li>
                        <span><label>Mail:</label> <a href="mailto:ehsan.sotoodeh@usask.ca">ehsan.sotoodeh&#64;usask.ca</a></span>
                    </li>
                    <li>
                      <span><label>Phone:</label><a href="tel:+1-306-914-4814">+1 (306) 914 4814</a> </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap ">
                    <a href="https://www.linkedin.com/in/ehsan-sotoodeh/" target="_blank" rel="noopener noreferrer" className="button linkedin">
                      <span className="ml-2" > <FontAwesomeIcon icon={faLinkedin} /></span>
                      <p className="text-light" >Linkedin</p>
                    </a>
                    <a href="https://github.com/ehsan-sotoodeh" target="_blank" rel="noopener noreferrer" className="button github">
                      <span className="ml-2 " ><FontAwesomeIcon className="" icon={faGithubSquare} /></span>
                      <p className="text-light" >Github</p>
                    </a>
                    <a href="http://sotoodeh.pro/a-resources/Resume_Ehsan_Sotoodeh.pdf" target="_blank" rel="noopener noreferrer" className="button stackexchange">
                      <span className="ml-2 " ><FontAwesomeIcon className="" icon={faFileCode} /></span>
                      <p className="text-light" >Resume</p>
                    </a>
                    <a href="mailto:ehsan.sotoodeh@usask.ca" target="_blank" rel="noopener noreferrer" className="button twitter">
                      <span className="ml-2 " ><FontAwesomeIcon className="" icon={faAt} /></span>
                      <p className="text-light" >Email</p>
                    </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  