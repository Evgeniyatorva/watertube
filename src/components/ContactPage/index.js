import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';
import SectionFormContainer from '../../container/SectionForm';

import './style.scss';


const ContactPage = () => {
  return (
    <div className="wrapper">
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