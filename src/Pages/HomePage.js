import React,{Component} from 'react';
import {connect } from 'react-redux'

import {fetchAllPosts, fetchAllProjects } from '../store/actions'



import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import HomePageComponent from '../components/HomePageComponent'
import NewsPageComponent from '../components/NewsPageComponent'
import AboutPageComponent from '../components/AboutPageComponent'
import MyProjectsComponent from '../components/MyProjectsComponent'
import LeftSidebarComponent from '../components/LeftSidebarComponent'
import MyEducationComponent from '../components/MyEducationComponent'
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
        fetchAllPosts(){
          dispatch(fetchAllPosts())
        }
  }
}


class HomePage extends Component {

  componentDidMount() {

  }



  render(){
    const blogs = this.props.fetchAllPosts();
    console.log(blogs)
 
    return(
      <div className="arlo_tm_content" >
        <NavbarComponent />
        <div className="row">
          <div  className="primaryColor col-lg-3  col-xl-2 p-lg-0"  >
            <LeftSidebarComponent/>
          </div>
          <div className="arlo_tm_rightpart col-lg-9 col-xl-10 p-lg-0">
            <div className="rightpart_inner">
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
