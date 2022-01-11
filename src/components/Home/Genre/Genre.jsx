import React, { useState } from 'react';
import './Genre.scss';
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/control-has-associated-label: 0 */

export default function Genre() {
  const [visiable, setvisiable] = useState(false);
  const onShow = () => setvisiable(state => !state);

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
                <button type="button" className="btn">
                  Action
                </button>
              </li>
              <li>
                <button type="button" className="btn">
                  Comedy
                </button>
              </li>
              <li>
                <button type="button" className="btn">
                  Drama
                </button>
              </li>
            </ul>
          </section>
        </div>

        <div className={maskContent}></div>
      </div>
    </>
  );

  // {/* <button type="button" className="btn">
  //   Horror
  // </button>

  // <button type="button" className="btn">
  //   Mystery
  // </button>

  // <button type="button" className="btn">
  //   Romance
  // </button>

  // <button type="button" className="btn">
  //   Thriller
  // </button>

  // <button type="button" className="btn">
  //   Fantasy
  // </button> */}
}

/*

<li><button type="button" className="btn">
        Action
      </butt</li>on>
      <li><button type="button" className="btn">
        Comedy
      </button></li>
      <li><button type="button" className="btn">
        Drama
      </button></li>
      <li><button type="button" className="btn">
        Horror
      </button></li>
      <li><button type="button" className="btn">
        Mystery
      </button></li>
      <li><button type="button" className="btn">
        Romance
      </button></li>
      <li><button type="button" className="btn">
        Thriller
      </button></li>
      <li><button type="button" className="btn">
        Fantasy
      </button></li>

*/
