import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import labelData from './labelData';
import Description from './Description';
import './index.scss';
import PosterInput from './PosterInput';

export default function CreatePoster() {
  const [data, state, setState] = labelData();
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const clearInputs = (...listFuncs) => {
    listFuncs.forEach(func => func(''));
  };

  const addPoster = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/posters', {
      ...state,
      description,
    });
    navigate('');
    clearInputs(...setState, setDescription);
  };

  return (
    <>
      <h3>Hello, Admin!</h3>
      <div>
        <form onSubmit={addPoster}>
          {data.map(el => (
            <PosterInput key={el.id} data={el} />
          ))}
          <Description state={[description, setDescription]} />
          <div>
            <button type="submit">Add poster</button>
          </div>
        </form>
      </div>
    </>
  );
}
