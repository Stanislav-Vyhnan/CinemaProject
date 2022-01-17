import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <Link to="create/-1">
        <button type="button" className="btn">
          CREATE
          <br />
          POSTER
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn">
          HOME
        </button>
      </Link>
    </nav>
  );
}
