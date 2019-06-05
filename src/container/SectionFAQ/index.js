import React, { Component } from 'react';
import Accordion from '../Accordion';

import AccordionFAQ from '../../accordionFAQ';

import './style.scss';


class SectionFAQ extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="section-faq">
            <h3 className="section-faq-title">Часто задаваемые вопросы</h3>
            <div className="section-faq-item">
							<Accordion AccordionFAQ={AccordionFAQ} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionFAQ;