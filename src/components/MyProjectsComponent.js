import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';


export default function MyProjectsComponent({projects}){
    console.log(projects)
    return(
              <div class="myProjectsComponent arlo_tm_section" id="projects">
                      <div class="arlo_tm_services_wrap">
                          <div class="container">
                              <div class="arlo_tm_title_holder">
                                  <h3>Projects</h3>
                                  <span>Click to know more </span>
                              </div>


                              <div className="mb-2">
                                    <div class="media">
                                        <div class="media-figure d-none d-sm-block">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1690.jpg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4 className="media-title"><strong>Global Institude for Water Security</strong></h4>
                                            <p>idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                            <hr/>
                                            <p>
                                                <span class="badge badge-warning p-1 mr-2">Python</span>
                                                <span class="badge badge-warning p-1 mr-2">Express</span>
                                                <span class="badge badge-warning p-1 mr-2">JQuery</span>
                                            </p>
                                        </div>

                                    </div>
                              </div>
                          


                              <div className=" mb-2">
                                    <article class="media">
                                        <div class="media-figure  d-none d-sm-block">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1690.jpg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4 className="media-title"><strong>Global Institude for Water Security</strong></h4>
                                            <p>idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                            <hr/>
                                            <p>
                                                <span class="badge badge-warning p-1 mr-2">Python</span>
                                                <span class="badge badge-warning p-1 mr-2">Express</span>
                                                <span class="badge badge-warning p-1 mr-2">JQuery</span>
                                            </p>
                                        </div>

                                    </article>
                              </div>
                          

                              <div className=" mb-2">
                                    <article class="media">
                                        <div class="media-figure  d-none d-sm-block ">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1690.jpg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4 className="media-title"><strong>Global Institude for Water Security</strong></h4>
                                            <p>idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                            <hr/>
                                            <p>
                                                <span class="badge badge-warning p-1 mr-2">Python</span>
                                                <span class="badge badge-warning p-1 mr-2">Express</span>
                                                <span class="badge badge-warning p-1 mr-2">JQuery</span>
                                            </p>
                                        </div>

                                    </article>
                              </div>
                          


                          </div>
                      </div>
                  </div>
    );
  }
  