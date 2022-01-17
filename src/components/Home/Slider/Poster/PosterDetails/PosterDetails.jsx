import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PosterDetails.scss';

export default function PosterDetails({ id }) {
  return (
    <div className="poster-details">
      <Link to={`film/${id}`}>
        <button type="button" className="btn-info">
          Details
        </button>
      </Link>
    </div>
  );
}

PosterDetails.propTypes = {
  id: PropTypes.number.isRequired,
};
