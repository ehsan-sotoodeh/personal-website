import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';


export default function NavbarComponent(){
    return (
        <div className="d-block d-lg-none">
          <Navbar className="" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link className="" href="#deets">More deets</Nav.Link>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link href="#deets">More deets</Nav.Link>
  
              </Nav>
  
            </Navbar.Collapse>
          </Navbar>
  
        </div>
    )
  }