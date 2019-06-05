import React from 'react';

import videomp4 from '../../assets/video/video-bg.mp4';
import videowebm from '../../assets/video/video-bg.webm';
import './style.scss';

const VideoBG = () => {
  return(    
    <video className='videoBg' autoPlay loop muted>
      <source src={videomp4} type='video/mp4' />
      <source src={videowebm} type='video/mp4' />
    </video>  
  )
}

export default VideoBG;