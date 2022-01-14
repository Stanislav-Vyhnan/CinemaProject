import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import add from '../../../../../assets/images/add.png';
import './PosterDetails.scss';

export default function PosterDetails({ id }) {
  return (
    <div className="poster-details">
      <Link to={`film/${id}`}>
        <button type="button" className="btn-info">
          Details
        </button>
      </Link>
      <button type="button" className="add-poster" title="Add film">
        <img src={add} alt="Add film" className="add-img" />
      </button>
    </div>
  );
}

PosterDetails.propTypes = {
  id: PropTypes.number.isRequired,
};
