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


console.log(post)

// extract first paragraph to make content summary;
const parsedHtml = ReactHtmlParser(post.content);
let readmoreIndex = -1;
const contentSummary = parsedHtml.map((obj,index) => {
  console.log(obj)
  if(obj.props){
      if(obj.props.name === "more"){
        readmoreIndex = index;
      }
  }
  if(readmoreIndex === -1)
      return obj;
});
console.log(readmoreIndex)
//const contentSummary = ""; //(contentStrings[0].length > 300)? contentStrings[0].substring(0,299)+" ..." : contentStrings[0]+" ...";



  return(
    <li className="wow fadeInUp" data-wow-duration="1.2s" >
      <div className="inner_list">
        <div className="m-4">

            <div >
                <h3 className="fontsize12 mb-3 lineHeight15" >{post.title}</h3>
            </div>
            <div className="definition text-justify">
              <p>{contentSummary}</p>
              <p className="text-left fontsize08 font-weight-bold" >{new Date(post.published).toDateString()} / {post.author.displayName}</p>
            </div>
        </div>
      </div>

    </li>
  )

}