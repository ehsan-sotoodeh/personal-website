import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward,faGraduationCap } from '@fortawesome/free-solid-svg-icons'


export default function MyEducationComponent(){
    return(
              <div class="MyEducationComponent arlo_tm_section" id="services">
                      <div class="arlo_tm_services_wrap">
                          <div class="container">
                              <div class="arlo_tm_title_holder">
                                  <h3>My Education</h3>
                                  <span></span>
                              </div>

                                    <div className="card mb-3 col-12 border-0">
                                            <article class="media">
                                                <div class="media-figure text-center">
                                                    <FontAwesomeIcon className="educationIcon" icon={faGraduationCap} />
                                                </div>
                                                <div class="media-body">
                                                    <h4 className="media-title"><strong>Computer Science / Human-Computer Interaction</strong></h4>
                                                    <ul className="mx-5">
                                                        <li>
                                                            Master's degree - graduated at March 2019
                                                        </li>
                                                        <li>
                                                            University of Saskatchewan Saskatoon, Canada
                                                        </li>
                                                        <li>
                                                            Awarded Scholarship due to academic excellence 
                                                        </li>
                                                    
                                                    </ul>
                                                </div>

                                            </article>
                                    </div>

                                    <div className="card mb-3 col-12 border-0">
                                            <article class="media">
                                                <div class="media-figure text-center">
                                                    <FontAwesomeIcon className="educationIcon" icon={faGraduationCap} />
                                                </div>
                                                <div class="media-body">
                                                    <h4 className="media-title"><strong>Information Technology / Web-based programming</strong></h4>
                                                    <ul className="mx-5">
                                                        <li>
                                                            Bachelor's degree - graduated at September 2015
                                                        </li>
                                                        <li>
                                                            University of Applied Science and Technology Mashhad, Iran
                                                        </li>
                                                        <li>
                                                            Distinguished Student with Total GPA (19.2 / 20) 
                                                        </li>
                                                    
                                                    </ul>
                                                </div>

                                            </article>
                                    </div>               

                                    <div className="card mb-3 col-12 border-0">
                                            <article class="media">
                                                <div class="media-figure text-center ">
                                                    <FontAwesomeIcon className="educationIcon" icon={faAward} />
                                                </div>
                                                <div class="media-body">
                                                    <h4 className="media-title"><strong>SENIOR WEB DESIGN SPECIALIST</strong></h4>
                                                    <ul className="mx-5">
                                                        <li>
                                                            6-month certificate program - graduated at September 2013
                                                        </li>
                                                        <li>
                                                            i3 Center Mashhad, Iran
                                                        </li>
                                                   
                                                    </ul>
                                                </div>

                                            </article>
                                    </div>

                          </div>
                      </div>
                  </div>
    );
  }
  