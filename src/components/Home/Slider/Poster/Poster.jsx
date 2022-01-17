import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Poster.scss';
import AdminBtn from './AdminBtn/AdminBtn';
import PosterDetails from './PosterDetails/PosterDetails';
import Modal from '../../../Modal/Modal';
import ModalButton from '../../../ModalButton/ModalButton';
import URL from '../../../../сonstants/url';
import localization from '../../../../сonstants/localization';

export default function Poster({ data }) {
  const navigate = useNavigate();
  const [visiable, setVisiable] = useState(false);
  const onFocus = () => setVisiable(state => !state);
  const posterImg = `poster-img ${visiable ? 'blur' : ''}`;
  const [posterDelete, setPosterDelete] = useState({});
  const [isModal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
    navigate(0);
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
        title={localization.ARE_YOU_SURE}
        onClose={onClose}
      >
        <ModalButton func={onClose} poster={posterDelete} />
      </Modal>

      <div className="container" onMouseEnter={onFocus} onMouseLeave={onFocus}>
        <img
          className={posterImg}
          src={URL.IMAGES + data.nameImg}
          alt="Poster"
        />
        {visiable ? (
          <div className="poster">
            <div className="poster-info">
              <section className="poster-title">
                <h2>{data.title}</h2>
              </section>
              <section className="poster-genre">
                <h3>{data.genres}</h3>
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
