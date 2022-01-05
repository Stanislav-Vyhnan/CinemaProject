import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Link to="create">
        <button type="button" className="btn">
          Створити
          <br />
          афішу
        </button>
      </Link>
      <Link to="posters">
        <button type="button" className="btn">
          Афіши
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn">
          Головна
        </button>
      </Link>
      <Link to="userPosters">
        <button type="button" className="btn">
          Мої Афіши
        </button>
      </Link>
    </>
  );
}
