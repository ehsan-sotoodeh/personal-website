import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'


export default function LeftSidebarComponent(){
    return(
              <div class="arlo_tm_leftpart_wrap d-none d-lg-block">
              <div class="leftpart_inner">
                  <div class="logo_wrap">
                      <a href="#"><img src="img/logo/desktop-logo.png" alt="" /></a>
                  </div>
                  <div class="menu_list_wrap">
                      <ul class="anchor_nav">
                          <li><a href="#home"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</a></li>
                          <li><a href="#about"><FontAwesomeIcon className="mr-3" icon={faUserTie} />About Me</a></li>
                          <li><a href="#projects"><FontAwesomeIcon className="mr-3" icon={faCode} />PROJECTS</a></li>
                          <li><a href="#education"><FontAwesomeIcon className="mr-3" icon={faGraduationCap} />Education</a></li>
                          <li><a href="#testimonials"><FontAwesomeIcon className="mr-3" icon={faQuoteLeft} />Testimonials</a></li>
                          <li><a href="#news"><FontAwesomeIcon className="mr-3" icon={faPenNib} />Blog</a></li>
                      </ul>
                  </div>
                  <div class="leftpart_bottom">
                  </div>
                  <a class="arlo_tm_resize" href="#"><i class="xcon-angle-left"></i></a>
              </div>
          </div>
    )
  }
  