import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import labelData from './labelData';
import Description from './Description';
import './index.scss';
import PosterInput from './PosterInput';
import Pictures from './Pictures';
import { swPostData } from '../../service';

const POSTER_URL = 'http://localhost:5000/posters';

export default function CreatePoster() {
  const [data, state] = labelData();
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const addPoster = async e => {
    e.preventDefault();
    const { title, genre, age, graphics, releaseDate, linkToYTTrailer } = state;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('genre', genre);
    formData.append('age', age);
    formData.append('graphics', graphics);
    formData.append('releaseDate', releaseDate);
    formData.append('poster', img);
    formData.append('description', description);
    formData.append('linkTrailerYT', linkToYTTrailer);

    swPostData(POSTER_URL, formData);
    navigate(0);
  };

  return (
    <div className="create-posters">
      <h3>Hello, Admin!</h3>
      <form
        className="form"
        onSubmit={addPoster}
        method="post"
        encType="multipart/form-data"
      >
        {data.map(el => (
          <PosterInput key={el.id} data={el} />
        ))}
        <Description state={[description, setDescription]} />
        <Pictures setImg={setImg} />
        <button type="submit">Add poster</button>
      </form>
    </div>
  );
}
