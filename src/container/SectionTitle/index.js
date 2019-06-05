import React, { Component } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { TimelineMax } from "gsap/all";


import './style.scss';


class SectionTitleContainer extends Component {
  constructor() {
    super();
    this.TimelineMax = new TimelineMax();
  }

  render() {
    return (
      <div>
        <SectionTitle tl={this.TimelineMax} />
      </div>      
    )
  }
}


export default SectionTitleContainer;