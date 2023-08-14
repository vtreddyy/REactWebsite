import React from 'react';
import logoImage from './AOL_logo_no_line.png'; // import the image

const Logo = () => (
  <a>
    <img src={logoImage} alt="logo" className="logo__image" />
  </a>
);

export default Logo;
