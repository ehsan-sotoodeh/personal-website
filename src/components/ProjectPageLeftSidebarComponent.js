import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft,faEye} from '@fortawesome/free-solid-svg-icons'



export default function ProjectPageLeftSidebarComponent({preview,source}){
    return(
              <div className="arlo_tm_leftpart_wrap d-none d-lg-block">
              <div className="leftpart_inner">
                  <div className="logo_wrap">
                      <a href="#"><img src="img/logo/desktop-logo.png" alt="" /></a>
                  </div>
                  <div className="menu_list_wrap">
                          <li><a className="btn btn-primary w-100 text-left" href="/"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</a></li>
                          <li><a className="btn btn-primary w-100 text-left" href={preview}><FontAwesomeIcon className="mr-3" icon={faEye} />View the project</a></li>
                          <li><a className="btn btn-primary w-100 text-left" href={source}><FontAwesomeIcon className="mr-3" icon={faCode} />Source Code</a></li>

                  </div>
                  <div className="leftpart_bottom">
                  </div>
                  <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
              </div>
          </div>
    )
  }
  