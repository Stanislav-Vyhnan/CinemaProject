import React from 'react';
// import logo from 'assets/logo.png';
import logo from '../../../assets/images/logo.png';
import exit from '../../../assets/images/exit.png';
import './index.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Company logo" />
      <span>C I N E M A</span>
      <img src={exit} alt="Exit to profile" />
    </header>
  );
}
