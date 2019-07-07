import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'

export default function TestimonialsPageComponent2(){
    return(
              <div className="arlo_tm_section" >
                      <div className="arlo_tm_services_wrap" >
                          <div className="container testimonialsComponent" id="testimonials">
                              <div className="arlo_tm_title_holder">
                                  <h3>Testimonials</h3>
                                  <span>What <b>my previous employers</b> are saying</span>
                              </div>

        
		<div className="col-sm-12">
				<Carousel  >
					<Carousel.Item>
							<div className="row">
								<div className="col-12">
									<div className="media">
										<div className="media-left d-flex mr-3">
											<a href="#">
												<img src="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" alt=""/>
											</a>
										</div>
										<div className="media-body">
											<div className="testimonial">
												<FontAwesomeIcon className="qouteIcon" icon={faQuoteLeft} />
												<p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
												<p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
											</div>
										</div>
									</div>
								</div>
							
							</div>	
					</Carousel.Item>
					<Carousel.Item>
							<div className="row">
								<div className="col-12">
									<div className="media">
										<div className="media-left d-flex mr-3">
											<a href="#">
												<img src="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" alt=""/>
											</a>
										</div>
										<div className="media-body">
											<div className="testimonial">
												<FontAwesomeIcon className="qouteIcon" icon={faQuoteLeft} />
												<p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
												<p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
											</div>
										</div>
									</div>
								</div>
							
							</div>	
					</Carousel.Item>
					<Carousel.Item>
							<div className="row">
								<div className="col-12">
									<div className="media">
										<div className="media-left d-flex mr-3">
											<a href="#">
												<img src="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" alt=""/>
											</a>
										</div>
										<div className="media-body">
											<div className="testimonial">
												<FontAwesomeIcon className="qouteIcon" icon={faQuoteLeft} />
												<p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
												<p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
											</div>
										</div>
									</div>
								</div>
							
							</div>	
					</Carousel.Item>
				
				</Carousel>
		</div>



                          </div>
                      </div>
                  </div>



    );
  }
  