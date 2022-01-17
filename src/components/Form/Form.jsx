import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.scss';
import PosterInput from './PosterInput';
import Pictures from './Pictures';
import Description from './Description';
import { swEditPoster, swGetDataById, swPostPoster } from '../../service';
import labelData from './labelData';
import Loading from '../Loading/Loading';

export default function Form({ id }) {
  const [inputData, state, setState] = labelData();
  const [visiable, setVisiabe] = useState(false);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== -1) {
      swGetDataById(id).then(res => {
        const { data } = res;
        setState.forEach(set => {
          const { key } = set;
          set.func(data[key]);
        });
        setDescription(data.description);
      });
    } else {
      setState.forEach(set => set.func(''));
      setDescription('');
    }
    return setVisiabe(true);
    // eslint-disable-next-line
  }, [id]);

  const addPoster = e => {
    e.preventDefault();

    if (id === -1) {
      const { title, genre, age, graphics, releaseDate, linkToYTTrailer } =
        state;
      const formData = new FormData();
      formData.append('title', title);
      formData.append('genre', genre);
      formData.append('age', age);
      formData.append('graphics', graphics);
      formData.append('releaseDate', releaseDate);
      formData.append('description', description);
      formData.append('linkTrailerYT', linkToYTTrailer);
      formData.append('poster', img);
      swPostPoster(formData);
    } else {
      swEditPoster(id, state);
    }
    navigate(0);
  };
  return visiable ? (
    <form
      className="form"
      onSubmit={addPoster}
      method="post"
      encType="multipart/form-data"
    >
      {inputData.map(el => (
        <PosterInput key={el.id} data={el} />
      ))}
      <Description state={[description, setDescription]} />
      {id === -1 ? <Pictures setImg={setImg} /> : null}
      <button type="submit">{id === -1 ? 'Add' : 'Edit'} poster</button>
    </form>
  ) : (
    <Loading />
  );
}

Form.propTypes = {
  id: PropTypes.number.isRequired,
};
