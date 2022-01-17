import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import localization from '../../../../сonstants/localization';

export default function Navigation() {
  return (
    <nav>
      <Link to="create/-1">
        <button type="button" className="btn">
          {localization.NAV_CREATE}
          <br />
          {localization.NAV_POSTER}
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn">
          {localization.NAV_HOME}
        </button>
      </Link>
    </nav>
  );
}
