import React, { Component } from 'react'
import {connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'
import BlogPageNavbarComponent from '../components/BlogPageNavbarComponent'
import {fetchAllPosts } from '../store/actions'
import BlogPost from '../components/BlogPost'


const mapStateToProps = (state) =>{
    return {
      blog : state.blog
    }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchAllPosts(){
      dispatch(fetchAllPosts())
    }
  }

}
class BlogPage extends Component {

    constructor(props){
        super(props);
      }

    componentDidMount() {
        this.props.fetchAllPosts();

    } 



    render() {
      const posts = this.props.blog
      if(posts.length === 0){
        return (
            <p>
                loading...
            </p>
        )
      }
    
      let postsJSX = posts.map(post => {
        return (<BlogPost key={"post"+post.id} post={post} />)
      });





        return(



      <div className="arlo_tm_content" >
        <BlogPageNavbarComponent />
        <div className="row">
          <div className="arlo_tm_rightpart col-12 p-5">
            <div class="rightpart_inner noBullet  h-100 p-5 d-flex">
              {postsJSX}                      
            </div>
          </div>
        
          <FooterComponent />

        </div>
      </div>       
         










         )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(BlogPage);
