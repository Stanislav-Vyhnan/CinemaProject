import React from 'react';
// import { useSelector } from 'react-redux';
import './index.scss';
import Posters from './Posters/Posters';
import Genre from './Genre/Genre';

export default function index() {
  // const posters = useSelector(state => state.posters);
  return (
    <>
      <div className="wrapper-posters">
        <Genre />
        <Posters />
      </div>
    </>
  );
}
