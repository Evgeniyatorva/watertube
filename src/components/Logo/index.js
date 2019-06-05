import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Logo = () => {
  return(
    <div className="logo">
      <Link to="/"><span className="logo-first-letter">W</span><span className="logo-other">aterTube</span></Link>
    </div>    
  )
}

export default Logo;