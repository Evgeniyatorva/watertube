import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';
import SectionBlog from '../SectionBlog';
import SectionFormContainer from '../../container/SectionForm';

import { Helmet } from "react-helmet";

import img from '../../assets/image/blog-bg.jpg';

import './style.scss';

const BlogPage = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Новости Блог Бурение скважин на воду в Беларуси | +375 (44) 765-43-36</title>
        <meta name="description" content="УЗНАЙТЕ БОЛЬШЕ О СКВАЖИНАХ НА ВОДУ С ПОМОЩЬЮ НАШИХ СТАТЕЙ Бурение скважин на ВОДУ по всей БЕЛАРУСИ | Доступные цены | Высокое качество | Звоните: +375 44 765 43 36 " />
        <meta name="keywords" content="Новости блог бурение скважин на воду цена районах Беларусь Область Минск Могилев Гомель Брест Гродно Витебск дача под ключ" />
      </Helmet>
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