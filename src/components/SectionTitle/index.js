import React from 'react';
import VideoBG from '../VideoBG';
import MainTitleContainer from '../../container/MainTitle';

import './style.scss';

const SectionTitle = (props) => {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="section-title">
          <VideoBG/>
          <MainTitleContainer tl={props.tl}  />
        </div>  
      </div>
    </div>
  )
}

export default SectionTitle;