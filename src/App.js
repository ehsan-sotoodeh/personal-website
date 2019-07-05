import React,{Component} from 'react';

import './styles/App.css';
import './styles/plugins.css';
import './styles/style.css';

import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import HomePageComponent from './components/HomePageComponent'
import NewsPageComponent from './components/NewsPageComponent'
import AboutPageComponent from './components/AboutPageComponent'
import MyProjectsComponent from './components/MyProjectsComponent'
import SkillsPageComponent from './components/SkillsPageComponent'
import ContactPageComponent from './components/ContactPageComponent'
import LeftSidebarComponent from './components/LeftSidebarComponent'
import MyEducationComponent from './components/MyEducationComponent'
import PortfolioPageComponent from './components/PortfolioPageComponent'
import CounterboxPageComponent from './components/CounterboxPageComponent'
import TestimonialsPageComponent from './components/TestimonialsPageComponent'

class App extends Component {

  componentDidMount() {

  }



  render(){
    return(
      <div className="arlo_tm_content" >
        <NavbarComponent />
        <div className="row">
          <div  className="primaryColor col-lg-2 p-lg-0"  >
            <LeftSidebarComponent/>
          </div>
          <div className="arlo_tm_rightpart col-lg-10 p-lg-0">
            <div class="rightpart_inner">
              <HomePageComponent />
              <AboutPageComponent />
              <MyProjectsComponent />
              <MyEducationComponent />  
              <TestimonialsPageComponent />
              <NewsPageComponent />
              <FooterComponent />

              
      {        //<SkillsPageComponent />
      }				

              
              {/* <PortfolioPageComponent /> */}
  {           // <CounterboxPageComponent />
  }            


            
          
            
          
            </div>
          </div>
        

        </div>
      </div>
    )
  }


  

}





export default App;
