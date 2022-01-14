import React from 'react';
import PropTypes from 'prop-types';
import './AdminBtn.scss';
import editIcon from '../../../../../assets/images/edit.png';
import deleteIcon from '../../../../../assets/images/delete.png';

export default function AdminBtn({ id, takeId }) {
  return (
    <>
      <div className="poster-panel">
        <button
          id={id}
          type="button"
          className="edit-poster"
          title="Edit poster"
        >
          <img src={editIcon} className="edit-poster" alt="Edit" />
        </button>
        <button
          type="button"
          className="delete-poster"
          title="Delete poster"
          onClick={takeId}
        >
          <img src={deleteIcon} id={id} className="delete-poster" alt="Edit" />
        </button>
      </div>
    </>
  );
}

AdminBtn.propTypes = {
  id: PropTypes.number.isRequired,
  takeId: PropTypes.func.isRequired,
};
