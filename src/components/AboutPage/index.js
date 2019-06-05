import React from 'react';
import Header from '../../container/Header';
import Footer from '../Footer';

import img from '../../assets/image/about.jpg';

import about from '../../about.json';

import './style.scss';


const AboutPage = () => {
  //regular expression breakdown
  const arrayText = about.text.split(/\r\n/);

  return(
    <div className="wrapper">
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