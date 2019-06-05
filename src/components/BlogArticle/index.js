import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';

import './style.scss';

import blog from '../../blog.json';


const BlogArticle = (props) => {
  //search in json article on id
  const id = (item) => (item.id === props.match.params.id);
  const item = blog.find(id);
  
  //regular expression breakdown
  const arrayText = item.text.split(/\r\n/);  
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main" >
        <div className="blog-article">
          <div className="blog-article-image-wrapper">
            <img className="blog-article-image" src={item.img} alt="img"/>
            <h3 className="blog-article-title">{item.title}</h3>
          </div>                    
          {arrayText.map((text) => {
            return <p className="blog-article-text">{text}</p>
          })}
        </div>   
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    
  )
}

export default BlogArticle;