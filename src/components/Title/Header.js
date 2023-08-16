import React from 'react';
import Logo from './Logo';
import TitleName from './TitleName';
import LoginButton from './LoginButton';
import './Header.css'; 
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <TitleName/>
                <LoginButton /> 
            </div>
        </header>
    );
};

export default Header;