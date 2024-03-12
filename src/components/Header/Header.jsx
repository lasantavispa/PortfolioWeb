//scss
import '../../scss/layout/Header/Header.scss';
//components
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//images
import photo from '../../images/photodali.png';

function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <div className="header__mobile">
        <Link to="/Profile" className="linkNav">
          <img className="logo" src={photo} alt="dalilogo" id="photodali" />
        </Link>
        <label className="switch">
        <input type="checkbox" id="myCheckbox" />
        <span className="slider"></span>
      </label>
        <div onClick={toggleMenu} className="navBtn">
          <i className="fa-solid fa-bars navBtn_bars"></i>
        </div>
      </div>
   
      <nav className={`header-nav ${menu ? 'isActive' : ''}`}>
        {/* <Link to="/Introduction" className="linkNav" onClick={toggleMenu}>
          Intrduction
        </Link> */}
        <a href='#1' className="linkNav" onClick={toggleMenu}>
          Introduction
        </a>
        <a href='#2' className="linkNav" onClick={toggleMenu}>
        Projects
        </a>
        <a href='#3' className="linkNav" onClick={toggleMenu}>
        Skills
        </a>
        <a href='#4' className="linkNav" onClick={toggleMenu}>
          AboutMe
        </a>
       
      </nav>
    </header>
  );
}

export default Header;
