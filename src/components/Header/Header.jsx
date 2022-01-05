import React from 'react';
import logo from '../../assets/images/logo.png';
import exit from '../../assets/images/exit.png';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Company logo" />
      <div>
        <span>C I N E M A</span>
      </div>

      <img src={exit} alt="Exit to profile" />
    </header>
  );
}
