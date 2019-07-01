import React,{Component} from 'react';
import './styles/App.css';
import './styles/plugins.css';
import './styles/style.css';
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';

class App extends Component {

  componentDidMount() {

  }



  render(){
    return(
      <div>
        <NavbarComponent />
        <LeftSidebarComponent />
      </div>
    )
  }


  

}


function NavbarComponent(){
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

function LeftSidebarComponent(){
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
						<li><a href="#services">Services</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#news">News</a></li>
						<li><a href="#contact">Contact</a></li>
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

export default App;
