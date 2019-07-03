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
      <div class="arlo_tm_content" >
        <NavbarComponent />
        <LeftSidebarComponent />
        <div class="arlo_tm_rightpart">
          <div class="rightpart_inner">
            <HomePageComponent />
            <AboutPageComponent />
            <MyProjectsComponent />
            <TestimonialsPageComponent />
            <MyEducationComponent />
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
    )
  }


  

}





export default App;
