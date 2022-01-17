import React from 'react';
import PropTypes from 'prop-types';
import { swDeletePoster } from '../../service';
import './ModalButton.scss';
import localization from '../../сonstants/localization';

export default function ModalButton({ func, poster }) {
  const onDeletePoster = () => {
    swDeletePoster(poster);
    func();
  };
  return (
    <div className="modal-btn">
      <button type="button" onClick={onDeletePoster}>
        {localization.YES_I_AM}
      </button>
      <button type="button" onClick={func}>
        {localization.NO_I_AM_NOT}
      </button>
    </div>
  );
}

ModalButton.propTypes = {
  func: PropTypes.func.isRequired,
  poster: PropTypes.object.isRequired,
};
