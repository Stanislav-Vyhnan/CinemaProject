import React from 'react';
import { useSelector } from 'react-redux';
import Poster from './Poster';

export default function Posters() {
  const posters = useSelector(state => state.posters);
  return (
    <div className="posters">
      {posters.map(el => (
        <Poster key={el.id} data={el} />
      ))}{' '}
      {posters.map(el => (
        <Poster key={el.id} data={el} />
      ))}{' '}
      {posters.map(el => (
        <Poster key={el.id} data={el} />
      ))}{' '}
      {posters.map(el => (
        <Poster key={el.id} data={el} />
      ))}{' '}
      {posters.map(el => (
        <Poster key={el.id} data={el} />
      ))}{' '}
    </div>
  );
}
