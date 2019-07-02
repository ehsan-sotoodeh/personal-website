import React, { Component }  from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

export default function HomePageComponent(){

    return(
                  <div class="arlo_tm_section" id="home">
                      <div class="arlo_tm_hero_header_wrap">
                          <div class="arlo_tm_universal_box_wrap particle jarallax" data-speed="0.1">
                              <div id="particles-js"></div> 
                              <div class="particle_overlay">
                  <Particles />
                </div>
                              <div class="inner_content">
                                  <div class="name_holder">
                                      <h3>Ehsan <span>Sotoodeh</span></h3> 
                                  </div>
                                  <div class="text_typing">
                                      <p>I'm <span class="arlo_tm_animation_text_word">
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
                              <div class="arlo_tm_arrow_wrap bounce anchor">
                                  <a href="#about"><i class="xcon-angle-double-down"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
    )
  }
  
  