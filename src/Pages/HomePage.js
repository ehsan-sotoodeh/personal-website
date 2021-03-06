import React,{Component} from 'react';
import {connect } from 'react-redux'
import {fetchAllPosts } from '../store/actions'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import HomePageComponent from '../components/HomePageComponent'
//import NewsPageComponent from '../components/NewsPageComponent'
import AboutPageComponent from '../components/AboutPageComponent'
import MyProjectsComponent from '../components/MyProjectsComponent'
import LeftSidebarComponent from '../components/LeftSidebarComponent'
import MyEducationComponent from '../components/MyEducationComponent'



const mapStateToProps = (state) =>{
  return {
      projects : state.projects,
      testimonials : state.testimonials,
      blog : state.blog
  }
}

const mapDispatchToProps = dispatch => {
  return{
        fetchAllPosts(maxResults){
          dispatch(fetchAllPosts(maxResults))
        }
  }
}


class HomePage extends Component {

  componentDidMount() {
    this.props.fetchAllPosts(3);
  }



  render(){
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
              {/* <TestimonialsPageComponent /> */}
              {/* <NewsPageComponent posts={this.props.blog} /> */}
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
