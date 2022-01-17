import React, { useState } from 'react';
import './Genre.scss';
import PropTypes from 'prop-types';

/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/control-has-associated-label: 0 */

export default function Genre({ genres, setGenre }) {
  const [visiable, setvisiable] = useState(false);
  const onShow = () => setvisiable(state => !state);
  const onSetGenre = e => {
    const genre = e.target.id;
    setGenre(genre);
  };
  const genreTogle = `genre-toggle ${visiable ? 'genre-toggle-hidden' : ''}`;
  const genreList = `list ${visiable ? 'genre-show' : ''}`;
  const maskContent = `mask-content ${visiable ? 'mask-content-show' : ''}`;

  return (
    <>
      <div className="genre">
        <input type="checkbox" id="genre-toggle" hidden onClick={onShow} />
        <label htmlFor="genre-toggle" className={genreTogle}></label>
        <div className={genreList}>
          {visiable ? (
            <button className="genre-close" type="button" onClick={onShow}>
              &#10005;
            </button>
          ) : null}
          <section>
            <h3>Genres</h3>
            <ul>
              <li>
                <button
                  id="all"
                  type="button"
                  className="btn"
                  onClick={onSetGenre}
                >
                  All
                </button>
              </li>
              {genres.map(el => (
                <li key={el}>
                  <button
                    type="button"
                    className="btn"
                    id={el}
                    onClick={onSetGenre}
                  >
                    {el}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={maskContent}></div>
      </div>
    </>
  );
}

Genre.propTypes = {
  genres: PropTypes.array.isRequired,
  setGenre: PropTypes.func.isRequired,
};
