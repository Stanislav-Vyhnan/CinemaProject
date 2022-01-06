import React from 'react';
import { useSelector } from 'react-redux';
import './Posters.scss';
import Poster from './Poster';
import Genre from './Genre/Genre';

export default function Posters() {
  const posters = useSelector(state => state.posters);
  return (
    <>
      <h3>All posters</h3>
      <div className="posters">
        <Genre />
        <div>
          {posters.map(el => (
            <Poster key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  );
}
