import React, { Component } from 'react';

import AccordionPanel from '../AccordionPanel';

import './style.scss';

class Accordion extends Component {  
  constructor (props) {
    super(props);
    this.state = {
      block1: true
    };
  }
  
  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  }
  
  render() {
    const accordionList = this.props.AccordionFAQ;
    
    return (
      <div className="container-accordion">
        <dl className="accordion">
          {
            accordionList.map((item, index) => (
              <AccordionPanel title={item.title} text={item.text} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
            ))
          }
        </dl>
      </div>
    )
  }
}

export default Accordion;