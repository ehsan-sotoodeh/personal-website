import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function LeftSidebarComponent(){
    return(
              <div class="arlo_tm_leftpart_wrap d-none d-lg-block">
              <div class="leftpart_inner">
                  <div class="logo_wrap">
                      <a href="#"><img src="img/logo/desktop-logo.png" alt="" /></a>
                  </div>
                  <div class="menu_list_wrap">
                      <ul class="anchor_nav">
                          <li><AnchorLink  href="#home"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</AnchorLink></li>
                          <li><AnchorLink  href="#about"><FontAwesomeIcon className="mr-3" icon={faUserTie} />About Me</AnchorLink></li>
                          <li><AnchorLink  href="#projects"><FontAwesomeIcon className="mr-3" icon={faCode} />PROJECTS</AnchorLink></li>
                          <li><AnchorLink  href="#education"><FontAwesomeIcon className="mr-3" icon={faGraduationCap} />Education</AnchorLink></li>
                          <li><AnchorLink  href="#testimonials"><FontAwesomeIcon className="mr-3" icon={faQuoteLeft} />Testimonials</AnchorLink></li>
                          <li><AnchorLink  href="#news"><FontAwesomeIcon className="mr-3" icon={faPenNib} />Blog</AnchorLink    ></li>
                      </ul>
                  </div>
                  <div class="leftpart_bottom">
                  </div>
                  <a class="arlo_tm_resize" href="#"><i class="xcon-angle-left"></i></a>
              </div>
          </div>
    )
  }
  