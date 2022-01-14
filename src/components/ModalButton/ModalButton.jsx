import React from 'react';
import PropTypes from 'prop-types';
import { swDeletePoster } from '../../service';

export default function ModalButton({ func, poster }) {
  const onClick = () => {
    swDeletePoster(poster);
    func();
  };
  return (
    <>
      <button type="button" onClick={onClick}>
        Yes, I am
      </button>
      <button type="button" onClick={func}>
        No, I am not
      </button>
    </>
  );
}

ModalButton.propTypes = {
  func: PropTypes.func.isRequired,
  poster: PropTypes.object.isRequired,
};
