import React,{Component} from 'react';
import {connect } from 'react-redux'

import {fetchAllProjects , fetchOneProjectById,fetchAllPosts} from '../store/actions'



import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import HomePageComponent from '../components/HomePageComponent'
import NewsPageComponent from '../components/NewsPageComponent'
import AboutPageComponent from '../components/AboutPageComponent'
import MyProjectsComponent from '../components/MyProjectsComponent'
import SkillsPageComponent from '../components/SkillsPageComponent'
import ContactPageComponent from '../components/ContactPageComponent'
import LeftSidebarComponent from '../components/LeftSidebarComponent'
import MyEducationComponent from '../components/MyEducationComponent'
import PortfolioPageComponent from '../components/PortfolioPageComponent'
import CounterboxPageComponent from '../components/CounterboxPageComponent'
import TestimonialsPageComponent from '../components/TestimonialsPageComponent'



const mapStateToProps = (state) =>{
  return {
      projects : state.projects,
      testimonials : state.testimonials,
      blog : state.blog
  }
}

const mapDispatchToProps = dispatch => {
  return{
        fetchAllProjects(){
          dispatch(fetchAllProjects())
      },
      fetchAllPosts(maxResults){
        dispatch(fetchAllPosts(maxResults))
      }
  }
}


class HomePage extends Component {

  componentDidMount() {

  }



  render(){
    let blog = this.props.fetchAllPosts(3);
    console.log(blog)

    return(
      <div className="arlo_tm_content" >
        <NavbarComponent />
        <div className="row">
          <div  className="primaryColor col-lg-3  col-xl-2 p-lg-0"  >
            <LeftSidebarComponent/>
          </div>
          <div className="arlo_tm_rightpart col-lg-9 col-xl-10 p-lg-0">
            <div class="rightpart_inner">
              <HomePageComponent />
              <AboutPageComponent />
              <MyProjectsComponent projects={this.props.projects} />
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


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
