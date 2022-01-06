import React from 'react';
import './Genre.scss';

export default function Genre() {
  return (
    <div className="genre">
      <ul>
        <li>
          <button type="button">Action</button>
        </li>
        <li>
          <button type="button">Comedy</button>
        </li>
        <li>
          <button type="button">Drama</button>
        </li>
        <li>
          <button type="button">Horror</button>
        </li>
        <li>
          <button type="button">Mystery</button>
        </li>
        <li>
          <button type="button">Romance</button>
        </li>
        <li>
          <button type="button">Thriller</button>
        </li>
        <li>
          <button type="button">Fantasy</button>
        </li>
      </ul>
    </div>
  );
}
