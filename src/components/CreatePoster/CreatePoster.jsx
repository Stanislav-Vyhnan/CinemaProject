import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import labelData from './labelData';
import Description from './Description';
import './index.scss';
import PosterInput from './PosterInput';
import Picture from './Pictures';

export default function CreatePoster() {
  const [data, state] = labelData();
  const [description, setDescription] = useState('');
  const posterInpRef = useRef(null);
  const addPictInpRef = useRef(null);
  const navigate = useNavigate();

  const addPoster = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/posters', {
      ...state,
      description,
    });
    navigate(0);
  };

  return (
    <div className="create-posters">
      <h3>Hello, Admin!</h3>
      <div className="form">
        <form onSubmit={addPoster}>
          {data.map(el => (
            <PosterInput key={el.id} data={el} />
          ))}
          <Description state={[description, setDescription]} />
          <Picture dataRef={[posterInpRef, addPictInpRef]} />
          <button type="submit">Add poster</button>
        </form>
      </div>
    </div>
  );
}
