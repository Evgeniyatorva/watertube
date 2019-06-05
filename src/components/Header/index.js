import React from 'react';
import Logo from '../Logo';
import Phone from '../Phone';
import MenuHamb from '../MenuHamb';

import './style.scss';


const Header = (props) => {
  return (
    <div className="container-fluid">
      <div className={"row header-background " + ( props.scroll || window.location.pathname !== '/' ? "header-background-scroll-true" : "header-background-scroll-false")}>      
        <div className="header-logo">
          <Logo/>
        </div>
        <div className="header-phone">
          <Phone/>
        </div>
        <div className="header-menu">
          <MenuHamb/>
        </div>          
      </div>
    </div>
  )
}

export default Header;