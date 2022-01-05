import React from 'react';
import { useSelector } from 'react-redux';
import './Posters.scss';
import Poster from './Poster';

export default function Posters() {
  const posters = useSelector(state => state.posters);
  return (
    <>
      <div>All posters</div>
      <div className="posters">
        {posters.map(el => (
          <Poster key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}
