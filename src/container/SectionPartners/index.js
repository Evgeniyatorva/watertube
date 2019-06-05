import React, { Component } from 'react';
import { TimelineMax } from 'gsap/all';
import 'intersection-observer'; 
import Observer from '@researchgate/react-intersection-observer';

// import images for section parents
import alko from '../../assets/image/partners/1.png';
import fraste from '../../assets/image/partners/2.jpg';
import ibo from '../../assets/image/partners/3.png';
import pedrollo from '../../assets/image/partners/4.jpg';
import sis from '../../assets/image/partners/5.jpg';
import djilex from '../../assets/image/partners/6.png';
import patriot from '../../assets/image/partners/7.jpg';
import unipump from '../../assets/image/partners/8.png';

import './style.scss';


class SectionPartners extends Component {
  constructor(props) {
    super(props);
    this.tl = new TimelineMax();
    this.partnersElements = [];
  }

  handleChange = (event, unobserve) => {
    if (event.isIntersecting && window.innerWidth > 660) {
      this.tl.staggerTo(this.partnersElements, 1, {opacity: 1}, 0.1)
      unobserve();
    }   
  }

  render() {
    const images = [alko, fraste, ibo, pedrollo, sis, djilex, patriot, unipump];

    const options = {
      onChange: this.handleChange,
      rootMargin: '0% 0% -15%'
    };

    return(
      <div className="container" >
        <div className="row">
          <div className="section-partners-title">
            <h3 className="section-partners-title-text">Мы сотрудничаем только с признанными компаниями, лидерами в своей отрасли</h3>
          </div>
          <Observer {...options}>      
            <div className="section-partners-item">
              {images.map((img, i)=>{
                return <img className="section-partners-item-img" key={i} src={img} ref={img => this.partnersElements[i] = img} alt={i} />
              })}
            </div>     
          </Observer> 
        </div>
      </div>
    )
  }  
}

export default SectionPartners;