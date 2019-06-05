import React, { Component } from 'react';
import MainTitle from '../../components/MainTitle';

import './style.scss';


class MainTitleContainer extends Component {
  constructor(prors) {
    super(prors);
    this.titleElement = null;
  }

  componentDidMount() {
    this.props.tl.fromTo(this.titleElement, 3, {opacity:0}, {opacity:1});
  }

  render() {
    return (
      <div>
        <MainTitle ref={(titleElement) => this.titleElement = titleElement} />
      </div>      
    )
  }
}


export default MainTitleContainer;