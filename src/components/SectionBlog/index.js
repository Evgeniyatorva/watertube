import React from 'react';
import BlogItem from '../BlogItem';
import { Link } from 'react-router-dom';

import blog from '../../blog.json';

import './style.scss';

const SectionBlog = (props) => {
  
  return(
    <div className="container" >
      <div className="row">
        <div className="section-blog-title-wrap">
          <h3 className="blog-title">Блог</h3>
        </div>        
        <div className="section-blog">        
          {blog.map((item, i)=>{
            if (window.location.pathname === '/'){
              if ( i <= 1) {
                return (
                  <div className="blog-big">
                    <BlogItem key={i} item={item}/>
                  </div>
                ) 
              } else if( i > 1 && i <= 4){
                return (
                  <div className="blog-little">
                    <BlogItem key={i} item={item}/>
                  </div>
                )
              } else {
                return (
                  <div>Добавьте статью</div>
                )
              } 
            } else {
              return (
                <div className="blog-little">
                  <BlogItem key={i} item={item}/>
                </div>
              )
            }                         
            })}
        </div> 
        <div className="section-blog-btn-wrap">
          {window.location.pathname === '/' ? <Link className="section-blog-btn" to={"/blog"}>Больше статей...</Link> : <div></div> }
            
        </div>      
      </div>
    </div>
  )

}

export default SectionBlog;