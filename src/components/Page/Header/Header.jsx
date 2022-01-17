import React from 'react';
import logo from '../../../assets/images/logo.png';
import exit from '../../../assets/images/exit.png';
import './Header.scss';
import localization from '../../../сonstants/localization';

export default function Header() {
  return (
    <header>
      <div className="item">
        <img className="logo" src={logo} alt={localization.COMPANY_LOGO} />
      </div>

      <h1>C I N E M A</h1>

      <div className="login">
        <span>{localization.LOGIN}</span>
        <img className="exit" src={exit} alt={localization.EXIT_TO_PROFILE} />
      </div>
    </header>
  );
}
