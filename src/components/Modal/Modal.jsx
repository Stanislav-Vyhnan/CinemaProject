import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import localization from '../../сonstants/localization';

const Modal = ({ children, visible = false, title = '', onClose }) => {
  const onKeydown = e => {
    return e.key === 'Escape' ? onClose() : false;
  };

  if (!visible) return null;

  return (
    <div
      tabIndex={0}
      role="button"
      className="modal"
      onKeyDown={onKeydown}
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        role="button"
        tabIndex={0}
        onClick={e => e.stopPropagation()}
        onKeyDown={onKeydown}
      >
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span
            onKeyDown={onKeydown}
            role="button"
            tabIndex={0}
            className="modal-close"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{children}</div>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={onClose}>
            {localization.CLOSE}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
