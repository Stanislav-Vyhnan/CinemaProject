import React from 'react';
import logo from '../../../assets/images/logo.png';
import exit from '../../../assets/images/exit.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="item">
        <img className="logo" src={logo} alt="Company logo" />
      </div>

      <h1>C I N E M A</h1>

      <div className="login">
        <span>Login</span>
        <img className="exit" src={exit} alt="Exit to profile" />
      </div>
    </header>
  );
}
