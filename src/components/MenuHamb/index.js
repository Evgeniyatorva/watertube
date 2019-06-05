import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './style.scss';

const MenuHamb = () => {
  return(
    <div className="menu">
      <Menu right noOverlay>
        <Link id="home" className="menu-item" to="/">Главная</Link>
        <Link id="about" className="menu-item" to="/about">О нас</Link>
        <Link id="contact" className="menu-item" to="/contact">Контакты</Link>
        <Link id="blog" className="menu-item" to="/blog">Блог</Link>
      </Menu>
    </div>    
  )
}

export default MenuHamb;