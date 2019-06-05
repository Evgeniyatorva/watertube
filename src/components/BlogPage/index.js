import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';
import SectionBlog from '../SectionBlog';
import SectionFormContainer from '../../container/SectionForm';

import img from '../../assets/image/blog-bg.jpg';

import './style.scss';

const BlogPage = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header/>
      </header>
      <main className="main">
        <div className="blog-page-main-section">
          <div className="blog-page-opening">
            <img className="blog-page-opening-img" src={img} alt="img"/>
            <h3 className="blog-page-opening-text">Узнайте больше о скважинах на воду с помощью наших статей</h3>            
          </div>
          <SectionBlog />
          <SectionFormContainer />
        </div>        
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default BlogPage;