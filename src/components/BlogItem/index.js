import React from 'react';

import { Link } from 'react-router-dom'

import './style.scss';

const BlogItem = (props) => {
  const { img, title, id } = props.item;
  return(
      <div className="blog-item">
        <Link to={`/blog/${id}`}>
          <img src={img} alt="img"/>
          <h3>{title}</h3>
        </Link>        
      </div>

  )
}


export default BlogItem;