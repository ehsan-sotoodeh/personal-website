import React, { Component }  from 'react';
import BlogPost from './BlogPost'

export default function NewsPageComponent({posts}){
  console.log(posts)
  if(posts.length === 0){
    return (
        <p>
            No blog post yet.
        </p>
    )
  }

  let postsJSX = posts.map(post => {
    return (<BlogPost key={"post"+post.id} post={post} />)
  });

    return(
			<div className="arlo_tm_section">
<div className="arlo_tm_news_wrap">
  <div className="container">
    <div className="arlo_tm_title_holder news"  id="news">
      <h3>Blog</h3>
      <span>Where I share what I know...</span>
    </div>
    <div className="arlo_tm_list_wrap blog_list">
      <ul className="total">
      {postsJSX}

      </ul>
    </div>
  </div>
  <a className="btn btn-outline-primary" href="/blog">More From Blog....</a>
</div>
</div>


       
  );
}
