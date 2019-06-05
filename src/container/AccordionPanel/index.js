import React, { Component } from 'react';

import './style.scss';


class AccordionPanel extends Component {
  render() {
    const { title, text, expand, onClick } = this.props;
    
    return (
      <div>
        <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
          {title}
        </dt>
        <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
          <p>{text}</p>
        </dd>
      </div>
    );
    
  }
}

export default AccordionPanel;