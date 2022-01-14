import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

const Modal = ({
  children,
  visible = false,
  title = '',
  footer = '',
  onClose,
}) => {
  const onKeydown = e => {
    console.log(e);
    return e === 'Escape' ? onClose() : false;
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
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

// const App = () => {
//   const [isModal, setModal] = React.useState(false);
//   const onClose = () => setModal(false);
//   return (
//     <React.Fragment>
//       <button onClick={() => setModal(true)}>Клик-клик-клик</button>
//       <Modal
//         visible={isModal}
//         title="Заголовок"
//         content={<p>Что-то важное</p>}
//         footer={<button onClick={onClose}>Закрыть</button>}
//         onClose={onClose}
//       />
//     </React.Fragment>
//   );
// };
