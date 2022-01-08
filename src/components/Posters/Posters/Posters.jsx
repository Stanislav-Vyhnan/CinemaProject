import React from 'react';
import { useSelector } from 'react-redux';
import './Posters.scss';
import Slider from '../../hoc/slider/Slider';

export default function Posters() {
  const posters = useSelector(state => state.posters);
  console.log(posters);
  return (
    <div className="posters">
      <Slider data={posters} />
    </div>
  );
}
