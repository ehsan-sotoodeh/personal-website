import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'


export default function LeftSidebarComponent(){
    return(
              <div className="arlo_tm_leftpart_wrap d-none d-lg-block">
              <div className="leftpart_inner">
                  <div className="logo_wrap">
                      {/* <a href="#"><img src="img/logo/desktop-logo.png" alt="" /></a> */}
                  </div>
                  <div className="menu_list_wrap text-justify">
                        <Scrollspy items={ ['home', 'about', 'projects', 'education', 'blogSection'] } offset={-50} currentClassName="is-current">

                          <li><AnchorLink  href="#home"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</AnchorLink></li>
                          <li><AnchorLink  href="#about"><FontAwesomeIcon className="mr-3" icon={faUserTie} />About Me</AnchorLink></li>
                          <li><AnchorLink  href="#projects"><FontAwesomeIcon className="mr-3" icon={faCode} />PROJECTS</AnchorLink></li>
                          <li><AnchorLink  href="#education"><FontAwesomeIcon className="mr-3" icon={faGraduationCap} />Education</AnchorLink></li>
                          <li><AnchorLink  href="#blogSection"><FontAwesomeIcon className="mr-3" icon={faPenNib} />Blog</AnchorLink></li>
                          {/* <li><AnchorLink  href="#testimonials"><FontAwesomeIcon className="mr-3" icon={faQuoteLeft} />Testimonials</AnchorLink></li> */}
                        </Scrollspy>
                  </div>
                  <div className="leftpart_bottom">
                  </div>
                  {/* <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a> */}
              </div>
          </div>
    )
  }
  