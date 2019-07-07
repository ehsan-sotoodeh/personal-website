import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'


export default class BlogPageNavbarComponent extends Component{
  constructor(props) {
        super(props);

      this.closeNavbar = this.closeNavbar.bind(this);
      this.toggle = this.toggle.bind(this);
     this.handleClickOutside = this.handleClickOutside.bind(this);

       this.state = {
            isOpen: false
        };
    }

    componentWillMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }

      handleClickOutside(event) {
        const t = event.target;
        if(t.classList.contains('navbar-toggler-icon')){
          return
        }
        if (this.state.isOpen && !t.classList.contains('navbarItem')) {
           this.closeNavbar();
        }
    }

    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }
    toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }



    render(){
      return (
          <div className="d-block d-block  fixed-top">
            <Navbar className=""  expanded={this.state.isOpen} onToggle={this.toggle} expand="lg" bg="dark" variant="dark">
              <AnchorLink  offset="70" className="navbarItem text-left transparent text-light" href="/"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</AnchorLink> 

            </Navbar>
    
          </div>
      )

    }

  }