import React, { Component } from 'react';
import Header from '../../container/Header';
import SectionTitleContainer from '../../container/SectionTitle';
import SectionAdvantage from '../SectionAdvantage';
import SectionBlog from '../SectionBlog';
import SectionFormContainer from '../../container/SectionForm';
import SectionPartners from '../../container/SectionPartners';
import SectionFAQ from '../../container/SectionFAQ';
import Footer from '../Footer';

import './style.scss';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
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
