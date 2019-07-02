import React, { Component }  from 'react';


export default function AboutPageComponent(){
    return(
      <div class="arlo_tm_section relative" id="about">
      <div class="arlo_tm_about_wrapper_all">
        <div class="container">
          <div class="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div class="arlo_tm_about_wrap">
            <div class="author_wrap">
  
              <div class="rightbox">
                <div class="arlo_tm_mini_title_holder">
                  <h3>Hi, I'm Ehsan Sotoodeh</h3>
                  </div><br/><br/>
                <div class="definition">
                  <p>
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
                   </p>
  
                </div>
                <div class="about_short_contact_wrap">
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
                      <span><label>Phone:</label> <a href="#">+1 306 914 4814</a></span>
                    </li>
                  </ul>
                </div>
                <div class="buttons_wrap">
                  <ul>
                    <li>
                      <a href="index.html"><span>Download CV</span></a>
                    </li>
                    <li class="anchor">
                      <a href="mailto:ehsan.sotoodeh@usask.ca"><span>Send Message</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  