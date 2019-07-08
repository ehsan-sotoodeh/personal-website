import React, { Component } from 'react'
import {connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'
import BlogPageNavbarComponent from '../components/BlogPageNavbarComponent'
import {fetchPostById } from '../store/actions'
import BlogPost from '../components/BlogPost'

const mapStateToProps = (state) =>{
    return {
      blog : state.blog
    }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchPostById(postId){
      dispatch(fetchPostById(postId))
    }
  }

}

class SinglePost extends Component {

  constructor(props){
      super(props);
      this.postId = this.props.match.params.postId

  }

    componentDidMount() {
      console.log(this.props)

      //get post from url

      // get post from store
      this.post = this.props.blog.filter(post =>{
        if(post.id === this.postId)
          return post;
      })[0];

      //if post is not in store get from network
      if(!this.post){
        this.props.fetchPostById(this.postId);
        console.log(this.postId)
        console.log("-----------")
      }

    } 



    render() {

      console.log(this.props.blog)  
      console.log(this.postId)

      const post = this.props.blog.filter(post =>{
        if(post.id === this.postId)
          return post;
      })[0];
      
      console.log(post)

      if(!post){
        return (
            <p>
                loading...
            </p>
        )
      }
    





        return(



      <div className="arlo_tm_content" >
        <BlogPageNavbarComponent />
        <div className="row">
          <div className="arlo_tm_rightpart col-12 p-5">
            <div className="rightpart_inner noBullet  h-100 p-5 d-flex">
                {JSON.stringify(post)}                    
            </div>
          </div>
        
          <FooterComponent />

        </div>
      </div>       
         










         )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);
