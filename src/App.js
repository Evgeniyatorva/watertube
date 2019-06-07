import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import BlogArticle from './components/BlogArticle';
import ContactPage from './components/ContactPage';

import ScrollToTop from './container/ScrollToTop';

import './App.scss';

// fix bug in gsap. Not working animation. Need activate  CSSPlugin
import CSSPlugin from 'gsap/CSSPlugin';
const C = CSSPlugin;

class App extends Component {
   
  render() {
    console.log(C);
    return (      
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route path="/blog/:id" component={BlogArticle}/>
            <Route path="/contact" component={ContactPage}/>
          </ScrollToTop>        
        </Switch>
      </BrowserRouter>      
    );
  }
}

export default App;
