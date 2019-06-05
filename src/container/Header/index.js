import React, { Component } from 'react';
import Header from '../../components/Header';

import './style.scss';

class HeaderContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      scroll: false
    }
  }

  getScroll = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else if (window.scrollTop !== undefined) {
      return window.scrollTop
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop
    }
  }

  handleScroll = () => {
    let currentScroll = this.getScroll();

    if (currentScroll > 0 ) {
      this.setState({
        scroll: true
      })
    } else {
      this.setState({
        scroll: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  render() {
    return (
      <div>
        <Header scroll={this.state.scroll} />
      </div>
    )
  }
}

export default HeaderContainer;