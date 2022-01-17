import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdminBtn.scss';
import editIcon from '../../../../../assets/images/edit.png';
import deleteIcon from '../../../../../assets/images/delete.png';

export default function AdminBtn({ id, takeId }) {
  return (
    <>
      <div className="poster-panel">
        <Link to={`create/${id}`}>
          <button
            id={id}
            type="button"
            className="edit-poster"
            title="Edit poster"
          >
            <img src={editIcon} className="edit-poster" alt="Edit" />
          </button>
        </Link>
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
