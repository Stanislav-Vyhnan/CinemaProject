import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Link to="create">
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
    </>
  );
}
