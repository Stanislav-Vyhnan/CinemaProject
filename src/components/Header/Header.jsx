import React from 'react';
import logo from '../../assets/images/logo.png';
import exit from '../../assets/images/exit.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Company logo" />
      <div>
        <h1>C I N E M A</h1>
      </div>
      <div className="login">
        <span>Login</span>
        <img src={exit} alt="Exit to profile" />
      </div>
    </header>
  );
}
