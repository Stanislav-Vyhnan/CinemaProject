import React from 'react';
import './Genre.scss';

export default function Genre() {
  const active = '';
  return (
    <div className="genre">
      <button type="button" className={`btn ${active}`}>
        Action
      </button>
      <button type="button" className={`btn ${active}`}>
        Comedy
      </button>
      <button type="button" className={`btn ${active}`}>
        Drama
      </button>
      <button type="button" className={`btn ${active}`}>
        Horror
      </button>
      <button type="button" className={`btn ${active}`}>
        Mystery
      </button>
      <button type="button" className={`btn ${active}`}>
        Romance
      </button>
      <button type="button" className={`btn ${active}`}>
        Thriller
      </button>
      <button type="button" className={`btn ${active}`}>
        Fantasy
      </button>
    </div>
  );
}
