import React from 'react';
import PropTypes from 'prop-types';
import './Posters.scss';
import Slider from '../Slider/Slider';

export default function Posters({ genre }) {
  return (
    <div className="posters">
      <Slider genre={genre} />
    </div>
  );
}

Posters.propTypes = {
  genre: PropTypes.string.isRequired,
};
