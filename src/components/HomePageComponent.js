import React  from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

export default function HomePageComponent(){

    return(
                  <div className="arlo_tm_section" id="home">
                      <div className="arlo_tm_hero_header_wrap">
                          <div className="arlo_tm_universal_box_wrap particle jarallax" data-speed="0.1">
                              <div id="particles-js"></div> 
                              <div className="particle_overlay">
                  <Particles     params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 2
                            },
                            line_linked: {
      
            			    }
                        }
                    }}/>
                </div>
                              <div className="inner_content">
                                  <div className="name_holder">
                                      <h3>Ehsan <span>Sotoodeh</span></h3> 
                                  </div>
                                  <div className="text_typing">
                                      <p>I'm <span className="arlo_tm_animation_text_word">
                    <Typed 
                      strings={[
                          'a Full-Stack Developer',
                          'an Android Developer'
                          ]}
                          typeSpeed={110}
                          backSpeed={10} 
                          loop >
                      </Typed>
                      
                      </span></p>
                                  </div>
                              </div>
                              <div className="arlo_tm_arrow_wrap bounce anchor">
                                  <a href="#about"><i className="xcon-angle-double-down"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
    )
  }
  
  