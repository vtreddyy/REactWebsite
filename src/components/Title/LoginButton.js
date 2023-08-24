import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <button 
      className="btn btn-outline header__button" 
      type="button"
      onClick={navigateToLogin}
    >
      Log In
    </button>
  );
};

export default LoginButton;
