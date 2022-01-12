import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import add from '../../../../assets/images/add.png';
import './Poster.scss';

export default function Poster({ data }) {
  const [visiable, setVisiable] = useState(false);
  const onFocus = () => setVisiable(state => !state);
  const posterImg = `poster-img ${visiable ? 'blur' : ''}`;

  return (
    <div className="container" onMouseEnter={onFocus} onMouseLeave={onFocus}>
      <img id={data.id} className={posterImg} src={data.src} alt="Poster" />

      {visiable ? (
        <div className="poster">
          <Link to={`film/${data.id}`}>
            <div className="poster-info">
              <button type="button" className="btn-info">
                i
              </button>
              <span>Details</span>
            </div>
          </Link>
          <button type="button" className="add-poster" title="Add film">
            <img src={add} alt="Add film" className="add-img" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

Poster.propTypes = {
  data: PropTypes.object.isRequired,
};
