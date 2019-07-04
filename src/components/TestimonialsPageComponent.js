import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
export default function TestimonialsPageComponent2(){
    return(
              <div class="arlo_tm_section" >
                      <div class="arlo_tm_services_wrap" >
                          <div class="container testimonialsComponent" id="testimonials">
                              <div class="arlo_tm_title_holder">
                                  <h3>Testimonials</h3>
                                  <span>What <b>my previous employers</b> are saying</span>
                              </div>

        
		<div class="col-sm-12">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				{/* <!-- Carousel indicators --> */}
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				{/* <!-- Wrapper for carousel items --> */}
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="row">
							<div class="col-12">
								<div class="media">
									<div class="media-left d-flex mr-3">
										<a href="#">
											<img src="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" alt=""/>
										</a>
									</div>
									<div class="media-body">
										<div class="testimonial">
                                            <FontAwesomeIcon className="qouteIcon" icon={faQuoteLeft} />
											<p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
											<p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
										</div>
									</div>
								</div>
							</div>
						
                        </div>			
					</div>

                </div>
			</div>
		</div>



                          </div>
                      </div>
                  </div>



    );
  }
  