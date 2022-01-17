import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../Form/Form';
import './CreatePoster.scss';
import localization from '../../сonstants/localization';

export default function CreatePoster() {
  const { id } = useParams();
  return (
    <div className="create-posters">
      <h3>{localization.HELLO}, Admin!</h3>
      <Form id={+id} />
    </div>
  );
}
