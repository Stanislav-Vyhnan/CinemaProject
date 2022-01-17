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
            className="trailer"
            src={state.linkTrailerYT}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <table className="details">
            <tr>
              <td>Age:</td>
              <td>{state.age}+</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>{state.genre}</td>
            </tr>
            <tr>
              <td>Graphics:</td>
              <td>{state.graphics}D</td>
            </tr>
            <tr>
              <td>Release date:</td>
              <td>{state.releaseDate}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{state.description}</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  ) : (
    <Loading />
  );
}
