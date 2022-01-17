import React from 'react';
import PropTypes from 'prop-types';
import './Posters.scss';
import Slider from '../Slider/Slider';

export default function Posters({ genres }) {
  return (
    <div className="posters">
      <Slider genres={genres} />
    </div>
  );
}

Posters.propTypes = {
  genres: PropTypes.string.isRequired,
};
