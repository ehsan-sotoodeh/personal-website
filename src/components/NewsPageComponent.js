import React, { Component }  from 'react';
import ReactHtmlParser from 'react-html-parser';


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
    return (<Post key={"post"+post.id} post={post} />)
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
</div>
</div>


       
  );
}

function Post({post}){
var el = document.createElement( 'div' );
el.innerHTML = post.content;
//console.log((el))

// extract first paragraph to make content summary;
const contentStrings = ReactHtmlParser(post.content).filter(obj => {
  if(typeof obj === "string")
    return obj;
});
const contentSummary = (contentStrings[0].length > 200)? contentStrings[0].substring(0,199)+" ..." : contentStrings[0]+" ..."
console.log(contentStrings)
console.log(contentSummary)

  return(
    <li className="wow fadeInUp" data-wow-duration="1.2s" >
      <div className="inner_list">
        <div className="definitions_wrap">
            <div className="date_wrap">
                <p>{new Date(post.published).toDateString()}<a href="">{post.author.displayName}</a></p>
            </div>
            <div className="title_holder">
                <h3><a href="">{post.title}</a></h3>
            </div>
            <div className="definition text-justify">
              <p>{ReactHtmlParser(contentSummary)}</p>
            </div>
        </div>
      </div>

    </li>
  )

}