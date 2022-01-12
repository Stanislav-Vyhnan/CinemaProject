import React from 'react';
import { useParams } from 'react-router-dom';
import './Film.scss';

export default function Film() {
  const { id } = useParams();
  return (
    <section className="film">
      <h2>Spider man</h2>
      <div>Film {id}</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SpjOeVrhAh8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
