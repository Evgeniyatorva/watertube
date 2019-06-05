import React, { Component } from 'react';
import { TimelineMax } from 'gsap/all';
import 'intersection-observer'; 
import Observer from '@researchgate/react-intersection-observer';

import './style.scss';

class AdvantagesItemContainer extends Component {
  constructor(props) {
    super(props);
    this.tl = new TimelineMax();
    
    this.titleRefBefore = null;

    this.textRef = null;    
    this.LetterRef = null;  

    this.imgRef = null;
    this.imgRefBefore = null;

    // content
    this.title = props.item.title;
    this.text = props.item.text;
    this.img = props.item.img;
    this.Letter = props.item.Letter;
  }

  handleChange = (event, unobserve) => {
    if (event.isIntersecting && window.innerWidth > 660) {
      this.tl.fromTo(this.imgRefBefore, 0.6,{width: '0%'},{width: '97%'}, "+=0.5")
           .fromTo(this.titleRefBefore, 0.8,{left: 0, width: '100%'},{left: '100%', width: '0%'}, "-=0.2")
           .fromTo(this.textRef, 1.5,{opacity: 0},{opacity: 0.6}, "-=0.5")          
           .fromTo(this.imgRef, 1,{opacity: 0},{opacity: 1}, "-=1.2")
      unobserve();
    }
    
  }  

  render() {
    const options = {
      onChange: this.handleChange,
      rootMargin: '0% 0% 7%'
    };
    
    return(
      <Observer {...options}>
        <div className="advantage-item">
          <div className="advantage-item-left">
            {/* <div className="advantages-item-letter" ref={(LetterRef)=> this.LetterRef = LetterRef} ><this.Letter/></div> */}
            <div className="advantages-item-title-wrap">
              <div className="advantages-item-title-before" ref={(titleRefBefore)=> this.titleRefBefore = titleRefBefore}></div>
              <h3 className="advantage-item-title">{this.title}</h3>
            </div>            
            <p className="advantage-item-text" ref={(textRef)=> this.textRef = textRef} >{this.text}</p>
          </div>
          <div className="advantage-item-right">
            <img src={this.img} alt="time" className="advantage-item-image" ref={(imgRef)=> this.imgRef = imgRef}/>
            <div className="advantage-item-image-background" ref={(imgRefBefore)=> this.imgRefBefore = imgRefBefore}></div>
          </div>        
        </div>      
      </Observer>
    )
  }  
}


export default AdvantagesItemContainer;