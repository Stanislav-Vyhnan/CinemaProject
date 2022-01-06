import React from 'react';
import PropTypes from 'prop-types';

export default function Poster({ data }) {
  return (
    <div key={data.id} className="poster">
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>genre: {data.genre}</p>
      <p>age: {data.age}</p>
      <p>graphics: {data.graphics}D</p>
      <p>release: {data.releasedate}</p>
      <p>description: {data.description}</p>
    </div>
  );
}

Poster.propTypes = {
  data: PropTypes.object.isRequired,
};
