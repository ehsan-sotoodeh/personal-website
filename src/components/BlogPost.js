import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom'


export default function BlogPost({post}){
    
    // extract first paragraph to make content summary;
    const parsedHtml = ReactHtmlParser(post.content);
    let readMoreIndex = 0;
    
    // find readmore link and take all elements before that as summary
    parsedHtml.forEach((obj,index) => {
      if(obj.props){
          if(obj.props.name === "more"){
            readMoreIndex = index;
          }
      }
    });

    const contentSummary = parsedHtml.slice(0,readMoreIndex)

    const image = parsedHtml[0];
    contentSummary.shift();

      return(
        <li className="wow fadeInUp" data-wow-duration="1.2s" >
            <div className="inner_list">
              <div className="m-4">
                  {image}
                  <hr/>
                  <h3 className="fontsize11 text-justify  lineHeight15 text-dark" >{post.title}</h3>
                  <div className="definition text-justify text-dark">
                    {contentSummary}
                    <NavLink  to={"/blog/"+post.id} >
                      Read more...
                    </NavLink>
                    <p className="text-left fontsize08 font-weight-bold" >{new Date(post.published).toDateString()} / {post.author.displayName}</p>
                  </div>
              </div>
            </div>
        </li>
      )
    
    }