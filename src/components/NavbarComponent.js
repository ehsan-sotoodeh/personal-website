import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'


export default function NavbarComponent(){
    return (
        <div className="d-block d-lg-none">
          <Navbar className="" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Ehsan Sotoodeh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto menu_list_wrap">
                <ul class="anchor_nav list-group-flush" >
                  <a className="list-group-item transparent text-light w-100" href="#home"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</a>
                  <a className="list-group-item transparent  text-light" href="#about"><FontAwesomeIcon className="mr-3" icon={faUserTie} />About Me</a>
                  <a className="list-group-item transparent  text-light" href="#projects"><FontAwesomeIcon className="mr-3" icon={faCode} />PROJECTS</a>
                  <a className="list-group-item transparent  text-light" href="#education"><FontAwesomeIcon className="mr-3" icon={faGraduationCap} />Education</a>
                  <a className="list-group-item transparent  text-light" href="#testimonials"><FontAwesomeIcon className="mr-3" icon={faQuoteLeft} />Testimonials</a>
                  <a className="list-group-item transparent  text-light" href="#news"><FontAwesomeIcon className="mr-3" icon={faPenNib} />Blog</a>

                </ul>
  
              </Nav>
  
            </Navbar.Collapse>
          </Navbar>
  
        </div>
    )
  }