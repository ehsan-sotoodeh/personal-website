import React, { Component }  from 'react';



export default function LeftSidebarComponent(){
    return(
              <div class="arlo_tm_leftpart_wrap d-none d-lg-block">
              <div class="leftpart_inner">
                  <div class="logo_wrap">
                      <a href="#"><img src="img/logo/desktop-logo.png" alt="" /></a>
                  </div>
                  <div class="menu_list_wrap">
                      <ul class="anchor_nav">
                          <li><a href="#home">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#projects">PROJECTS</a></li>
                          <li><a href="#education">Education</a></li>
                          <li><a href="#testimonials">Testimonials</a></li>
                          <li><a href="#news">News</a></li>
                      </ul>
                  </div>
                  <div class="leftpart_bottom">
                      <div class="social_wrap">
                          <ul>
                              <li><a href="#"><i class="xcon-facebook"></i></a></li>
                              <li><a href="#"><i class="xcon-twitter"></i></a></li>
                              <li><a href="#"><i class="xcon-linkedin"></i></a></li>
                              <li><a href="#"><i class="xcon-instagram"></i></a></li>
                              <li><a href="#"><i class="xcon-behance"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  <a class="arlo_tm_resize" href="#"><i class="xcon-angle-left"></i></a>
              </div>
          </div>
    )
  }
  