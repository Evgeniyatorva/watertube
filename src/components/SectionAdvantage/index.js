import React from 'react';
import AdvantageItemContainer from '../../container/AdvantagesItem';
import AdvantageText from '../../advantage.json';

// imported images for advantage
import speed from '../../assets/image/speed.jpg';
import skill from '../../assets/image/skill.jpg';
import price from '../../assets/image/money.jpg';
import consultation from '../../assets/image/consultation.jpg';

// imported SVG letter for advantage
import SVGLetters from '../SVGLetters';

import './style.scss';

const SectionAdvantage = () => {
  // add images and svg letters in json
  const img = [speed, skill, price, consultation];
  for( let i = 0; i < img.length; i++) {
    AdvantageText[i].img = img[i];
    AdvantageText[i].Letter = SVGLetters[i];
  }

  return(
    <div className="container" >
      <div className="row">
        <div className="advantage">
          <h3 className="advantage-title">Почему выбирают именно нас</h3>
          {AdvantageText.map((item, i) => (<AdvantageItemContainer key={i} item={item} /> ))}
        </div>
      </div>
    </div>
  )

}

export default SectionAdvantage;