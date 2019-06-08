import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';

import { Helmet } from "react-helmet";

import './style.scss';

import blog from '../../blog.json';


const BlogArticle = (props) => {
  //search in json article on id
  const id = (item) => (item.id === props.match.params.id);
  const item = blog.find(id);
  
  //regular expression breakdown
  const arrayText = item.text.split(/\r\n/);  

  //tag meta description
  const textDescriptionMeta = item.text.slice( 0, 150);
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{item.title} | Бурение скважин на воду в Беларуси | +375 (44) 765-43-36</title>
        <meta name="description" content={textDescriptionMeta + ` Бурение скважин на ВОДУ по всей БЕЛАРУСИ | Доступные цены | Высокое качество | Звоните: +375 44 765 43 36 | Круглосуточно | Гарантия результата | бурение скважин на даче в деревне`}   />
        <meta name="keywords" content="бурение скважин на воду цена районах Беларусь Область Минск Могилев Гомель Брест Гродно Витебск дача под ключ купить стоимость" />
      </Helmet>
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