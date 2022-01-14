import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Poster.scss';
import AdminBtn from './AdminBtn/AdminBtn';
import PosterDetails from './PosterDetails/PosterDetails';
import Modal from '../../../Modal/Modal';
import ModalButton from '../../../ModalButton/ModalButton';

const GET_IMG_URL = 'http://localhost:5000/upload/';
export default function Poster({ data }) {
  // const navigate = useNavigate();
  const [visiable, setVisiable] = useState(false);
  const onFocus = () => setVisiable(state => !state);
  const posterImg = `poster-img ${visiable ? 'blur' : ''}`;
  const [posterDelete, setPosterDelete] = useState({});
  const [isModal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
    // navigate(0);
  };
  const takeId = e => {
    const { nameImg } = data;
    setPosterDelete({
      id: e.target.id,
      fileName: nameImg,
    });
    setModal(true);
  };
  return (
    <>
      <Modal
        visible={isModal}
        title="Are you sure?"
        footer={
          <button type="button" onClick={onClose}>
            Close
          </button>
        }
        onClose={onClose}
      >
        <ModalButton func={onClose} poster={posterDelete} />
      </Modal>

      <div className="container" onMouseEnter={onFocus} onMouseLeave={onFocus}>
        <img
          className={posterImg}
          src={GET_IMG_URL + data.nameImg}
          alt="Poster"
        />
        {visiable ? (
          <div className="poster">
            <div className="poster-info">
              <section className="poster-title">
                <h2>{data.title}</h2>
                <h3>{data.genre}</h3>
              </section>
              <PosterDetails id={data.id} />
              <AdminBtn id={data.id} takeId={takeId} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

Poster.propTypes = {
  data: PropTypes.object.isRequired,
};
