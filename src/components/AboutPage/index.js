import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';

import img from '../../assets/image/about.jpg';

import about from '../../about.json';

import { Helmet } from "react-helmet";

import './style.scss';


const AboutPage = () => {
  //regular expression breakdown
  const arrayText = about.text.split(/\r\n/);

  return(
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>О нашей компании Бурение скважин на воду в Беларуси | +375 (44) 765-43-36</title>
        <meta name="description" content="Мы предоставляем качественные услуги по бурению скважин на воду во всех городах Республики Беларусь. В населенных пунктах, на дачных участках, в коттеджных поселках. Бурение скважин на ВОДУ по всей БЕЛАРУСИ | Доступные цены | Высокое качество | Звоните: +375 44 765 43 36 " />
        <meta name="keywords" content="бурение скважин на воду цена районах Беларусь Область Минск Могилев Гомель Брест Гродно Витебск дача под ключ" />
      </Helmet>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="about-page">
              <div className="about-left">
                <img className="about-img" src={img} alt="img"/>
                <div className="about-img-background"></div>
              </div>
              <h3 className="about-title">{about.title}</h3>
              {arrayText.map((item)=> <p className="about-text">{item}</p>)}
            </div>
          </div>          
        </div>      
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}


export default AboutPage;