import React, { Component } from 'react';
import Header from '../../container/Header';
import SectionTitleContainer from '../../container/SectionTitle';
import SectionAdvantage from '../SectionAdvantage';
import SectionBlog from '../SectionBlog';
import SectionFormContainer from '../../container/SectionForm';
import SectionPartners from '../../container/SectionPartners';
import SectionFAQ from '../../container/SectionFAQ';
import Footer from '../Footer';

import { Helmet } from "react-helmet";

import './style.scss';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Бурение скважин на воду в Беларуси | +375 (44) 765-43-36</title>
          <meta name="description" content="Бурение скважин на ВОДУ по всей БЕЛАРУСИ | Доступные цены | Высокое качество | Звоните: +375 44 765 43 36 | Круглосуточно | Гарантия результата | бурение скважин на даче в деревне" />
          <meta name="keywords" content="бурение скважин на воду цена районах Беларусь Область Минск Могилев Гомель Брест Гродно Витебск дача под ключ купить стоимость" />
        </Helmet>
        <header className="header">
          <Header/>
        </header>
        <main className="main">          
          <SectionTitleContainer/>           
          <SectionAdvantage/>   
          <SectionBlog/>              
          <SectionPartners/>
          <SectionFAQ />
          <SectionFormContainer/>
        </main>
        <footer className="footer">
          <Footer/>
        </footer>       
      </div>
    );
  }
}

export default Main;
