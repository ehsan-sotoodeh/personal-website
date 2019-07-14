import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward,faGraduationCap } from '@fortawesome/free-solid-svg-icons'


export default function MyEducationComponent(){
    return(
              <div className="MyEducationComponent arlo_tm_section" id="education">
                      <div className="arlo_tm_services_wrap">
                          <div className="container">
                              <div className="arlo_tm_title_holder">
                                  <h3>Education</h3>
                                  <span></span>
                              </div>

                                    <div className="card mb-3 col-12 border-0">
                                            <article className="media">
                                                <div className="media-figure text-center  d-none d-md-block">
                                                    <FontAwesomeIcon className="educationIcon" icon={faGraduationCap} />
                                                </div>
                                                <div className="media-body">
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
                                            <article className="media">
                                                <div className="media-figure text-center  d-none d-md-block">
                                                    <FontAwesomeIcon className="educationIcon" icon={faGraduationCap} />
                                                </div>
                                                <div className="media-body">
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
                                            <article className="media">
                                                <div className="media-figure text-center  d-none d-md-block">
                                                    <FontAwesomeIcon className="educationIcon" icon={faAward} />
                                                </div>
                                                <div className="media-body">
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
  