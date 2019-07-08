import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { NavLink } from 'react-router-dom'


export default class BlogPageNavbarComponent extends Component{
  constructor(props) {
        super(props);
    }

    componentWillMount() {
  }
  componentWillUnmount() {
  }




    render(){
      return (
          <div className="d-block d-block  fixed-top">
            <Navbar className=""   expand="lg" bg="dark" variant="dark">
              <NavLink  offset="70" className="navbarItem text-left transparent text-light" to="/"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</NavLink> 

            </Navbar>
    
          </div>
      )

    }

  }