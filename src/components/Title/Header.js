import React from 'react';
import Logo from './Logo';
import TitleName from './TitleName';
import './Header.css'; 
const Header = () => {
    return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <TitleName/>
        <button className="btn btn-outline header__button" type="button">Log In</button>
      </div>
    </header>
  );
};

export default Header;