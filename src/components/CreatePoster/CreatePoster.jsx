import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import labelData from './labelData';
import Description from './Description';
import './index.scss';
import PosterInput from './PosterInput';
import Pictures from './Pictures';
import { swPostData } from '../../service';

const POSTER_URL = 'http://localhost:5000/poster';
const POSTER_INFO_URL = 'http://localhost:5000/poster_info';

export default function CreatePoster() {
  const [data, state] = labelData();
  const [poster, posterInfo] = state;
  const [description, setDescription] = useState('');
  const posterInpRef = useRef(null);
  const addPictInpRef = useRef(null);
  // const navigate = useNavigate();

  const addPoster = e => {
    e.preventDefault();
    swPostData(poster, POSTER_URL);
    swPostData({ ...posterInfo, description }, POSTER_INFO_URL);
    // navigate(0);
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
          <Pictures dataRef={[posterInpRef, addPictInpRef]} />
          <button type="submit">Add poster</button>
        </form>
      </div>
    </div>
  );
}
