import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Film.scss';
import { swGetDataById } from '../../service/index';
import Loading from '../Loading/Loading';
import localization from '../../сonstants/localization';

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
              <td>{localization.AGE}:</td>
              <td>{state.age}+</td>
            </tr>
            <tr>
              <td>{localization.GENRES}:</td>
              <td>{state.genres}</td>
            </tr>
            <tr>
              <td>{localization.GRAPHICS}:</td>
              <td>{state.graphics}D</td>
            </tr>
            <tr>
              <td>{localization.RELEASE_DATE}:</td>
              <td>{state.releaseDate}</td>
            </tr>
            <tr></tr>
          </table>
        </div>
        <section className="film-description">
          <h3>{localization.DESCRIPTION}</h3>
          <p>{state.description}</p>
        </section>
      </section>
    </>
  ) : (
    <Loading />
  );
}
