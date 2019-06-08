import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';
import SectionFormContainer from '../../container/SectionForm';

import { Helmet } from "react-helmet";

import './style.scss';


const ContactPage = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Контакты | Бурение скважин на воду в Беларуси | +375 (44) 765-43-36</title>
        <meta name="description" content="Мы работаем по всей территории Республики Беларусь Бурение скважин на ВОДУ по всей БЕЛАРУСИ | Доступные цены | Высокое качество | Звоните: +375 44 765 43 36 | Круглосуточно | Гарантия результата | бурение скважин на даче в деревне" />
        <meta name="keywords" content="бурение скважин на воду цена районах Беларусь Область Минск Могилев Гомель Брест Гродно Витебск дача под ключ купить стоимость" />
      </Helmet>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="contact-page">
              <p className="contact-page-text">Мы работаем по всей территории Республики Беларусь<br/> телефон: <span>+375 (44) 765-43-36</span></p>
            </div>
          </div>
        </div>
        <SectionFormContainer />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default ContactPage;