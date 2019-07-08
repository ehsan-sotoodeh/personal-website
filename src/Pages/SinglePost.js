import React, { Component } from 'react'
import {connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'
import BlogPageNavbarComponent from '../components/BlogPageNavbarComponent'
import {fetchPostById } from '../store/actions'
import BlogPost from '../components/BlogPost'
import ReactHtmlParser from 'react-html-parser';

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
      //get post id from url
      this.postId = this.props.match.params.postId

  }

    componentDidMount() {

      // get post from store
      this.post = this.props.blog.filter(post =>{
        if(post.id === this.postId)
          return post;
      })[0];

      //if post is not in store get from network
      if(!this.post){
        this.props.fetchPostById(this.postId);
      }

    } 



    render() {

      const post = this.props.blog.filter(post =>{
        if(post.id === this.postId)
          return post;
      })[0];
      

      if(!post){
        return (
            <p>
                loading...
            </p>
        )
      }
    
      console.log(post)

      const parsedHtml = ReactHtmlParser(post.content);
      const image = parsedHtml[0];
      const title = post.title;
      const publishDate = new Date(post.published).toDateString();
      parsedHtml.shift();

        return(



      <div className="blogContent" >
        <BlogPageNavbarComponent />
        <div className="row">
          <div className="col-12 p-5">
            <div className="text-justify">
                {image}
                <h3 className="text-center my-4 lineHeight22">{title}</h3>
                <hr/>
                <p className="font-weight-bold">{publishDate} / {post.author.displayName}</p>
                {parsedHtml}                    
            </div>
          </div>
        
          <FooterComponent />

        </div>
      </div>       
         










         )
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);
