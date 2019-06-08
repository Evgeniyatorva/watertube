import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/all';
import 'intersection-observer'; 
import Observer from '@researchgate/react-intersection-observer';

import Form from '../Form';
import videoTeam from '../../assets/video/our_team.mp4';

import Icon from '../../components/SocialIcon';

import './style.scss';

class SectionForm extends Component {
  constructor(props) {
    super(props);
    this.VkontaktIcon = Icon.VkontaktIcon;
    this.YoutubeIcon = Icon.YoutubeIcon;
    this.TwitterIcon = Icon.TwitterIcon;
    this.InstagramIcon = Icon.InstagramIcon;
    this.FacebookIcon = Icon.FacebookIcon;

    this.tl = new TimelineMax();

    this.title = null;
    this.videoBefore = null;
    this.link = null;
    this.sectionTop = null;
    this.sectionBottom = null;
  }

  handleChange = (event, unobserve) => {

    if (event.isIntersecting ) {
      this.tl.fromTo(this.title, 0.7, {y: 100, opacity: 0}, {y: 0, opacity: 1}, '+=0.3')
           .fromTo(this.videoBefore, 1.3, {left: 0, width: '100%'}, {left: '100%', width: '0%'})
           .fromTo(this.link, 0.8, {opacity: 0}, {opacity: 1}, '-=0.1')
           .fromTo(this.sectionTop, 0.8, {left: '4%', width: '91%'}, {left: '95%', width: '0%'}, '-=0.5')
           .fromTo(this.sectionBottom, 0.8, {left: '4%', width: '91%'}, {left: '95%', width: '0%'}, '-=0.5')
      unobserve();
    }   
  }

  render() { 
    const options = {
      onChange: this.handleChange,
      rootMargin: '0% 0% -25%'
    };

    return(
      <Observer {...options}>
        <div className="container-fluid" >
          <div className="row">
            <div className="section-form-left">
              <div className="our-team-wrap">
                <h3 className="our-team" ref={(title) => this.title = title}>О нашей компании</h3>
              </div>
              <div className="video-form-wrap">
                <div className="video-form-before" ref={(video) => this.videoBefore = video}></div>
                <video className="video-form" autoPlay loop muted>
                  <source src={videoTeam} type='video/mp4' />
                </video>
              </div>
              <div className="our-team-link-wrap" ref={(link) => this.link = link}>
                <Link to="/about" className="our-team-link">Подробнее...</Link>
              </div>
            </div>
            <div className="section-form-right">
              <div className="section-form-right-top">
                <div className="section-form-right-top-before" ref={(sectionTop) => this.sectionTop = sectionTop}></div>
                <div className="form-tel">
                  <h4 className="form-tel-title">Наши контактные телефоны</h4>
                  <a href="tel:+375447654336">+375 (44) 765-43-36</a>
                  <a href="tel:+375257944159">+375 (25) 794-41-59</a>
                </div>
                <div className="form-social">
                  <h4 className="form-social-title">Мы в соц. сетях</h4>
                  {/* <a  href="/"><this.InstagramIcon/></a>
                  <a href="https://vk.com/club117306379"><this.YoutubeIcon/></a> */}
                  <a className="first-icon" href="https://www.facebook.com/groups/177021456180204/"><this.FacebookIcon/></a>
                  <a href="https://vk.com/club117306379"><this.VkontaktIcon/></a>
                  {/* <a href="/"><this.TwitterIcon/></a> */}
                </div>                
              </div>
              <div className="section-form-right-bottom">
                <div className="section-form-right-bottom-before" ref={(sectionBottom) => this.sectionBottom = sectionBottom}></div>
                <Form />             
              </div>
            </div>
          </div>
        </div>
      </Observer>
    )
  }
}

export default SectionForm;
