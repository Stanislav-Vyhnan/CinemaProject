import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Film.scss';
import { swGetDataById } from '../../service/index';
import Loading from '../Loading/Loading';

const GET_IMG_URL = 'http://localhost:5000/upload/';

export default function Film() {
  const { id } = useParams();
  const poster = useSelector(state => state.filmsById[id]);
  const [state, setState] = useState(poster);

  useEffect(() => {
    if (poster === undefined) {
      swGetDataById(id).then(res => {
        const { data } = res;
        setState(data);
      });
    }
  }, [id, poster]);

  return state ? (
    <>
      <section className="film">
        <h2>{state.title}</h2>
        <div className="film-info">
          <img src={GET_IMG_URL + state.nameImg} alt="" />
          <iframe
            width="560"
            height="315"
            src={state.linkTrailerYT}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <ul>
              <li>Age: {state.age}+</li>
              <li>Genre: {state.genre}</li>
              <li>Graphics: {state.graphics}D</li>
              <li>Release date: {state.releaseDate}</li>
            </ul>
          </div>
        </div>
        <div>Description: {state.description}</div>
      </section>
    </>
  ) : (
    <Loading />
  );
}
