import React, { Component }  from 'react';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib,faCode,faUserTie,faHome,faGraduationCap,faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'


export default class NavbarComponent extends Component{
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
          <div className="d-block d-lg-none fixed-top">
            <Navbar className=""  expanded={this.state.isOpen} onToggle={this.toggle} expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Ehsan Sotoodeh</Navbar.Brand>
              <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav collapse" />
              <Navbar.Collapse id="responsive-navbar-nav collapse"  >
                <Nav className="mr-auto menu_list_wrap">
                  <Scrollspy className="anchor_nav list-group-flush" items={ ['home', 'about', 'projects', 'education', 'testimonials', 'blogSection'] } offset={-50} currentClassName="is-current">

                    <AnchorLink  onClick={this.closeNavbar} offset="70" className="list-group-item navbarItem transparent text-light w-100" href="#home"><FontAwesomeIcon className="mr-3" icon={faHome} />Home</AnchorLink> 
                    <AnchorLink  onClick={this.closeNavbar} offset="70" className="list-group-item navbarItem transparent  text-light" href="#about"><FontAwesomeIcon className="mr-3" icon={faUserTie} />About Me</AnchorLink>
                    <AnchorLink  onClick={this.closeNavbar} offset="70" className="list-group-item navbarItem transparent  text-light" href="#projects"><FontAwesomeIcon className="mr-3" icon={faCode} />PROJECTS</AnchorLink>
                    <AnchorLink  onClick={this.closeNavbar} offset="70" className="list-group-item navbarItem transparent  text-light" href="#education"><FontAwesomeIcon className="mr-3" icon={faGraduationCap} />Education</AnchorLink>
                    {/* <AnchorLink  onClick={this.closeNavbar} offset="70" className="list-group-item navbarItem transparent  text-light" href="#testimonials"><FontAwesomeIcon className="mr-3" icon={faQuoteLeft} />Testimonials</AnchorLink> */}
                    <AnchorLink  onClick={this.closeNavbar} offset="70"  className="list-group-item navbarItem transparent  text-light" href="#blogSection"><FontAwesomeIcon className="mr-3" icon={faPenNib} />Blog</AnchorLink>
                  </Scrollspy>

    
                </Nav>
    
              </Navbar.Collapse>
            </Navbar>
    
          </div>
      )

    }

  }