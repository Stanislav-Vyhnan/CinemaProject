import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posters.scss';
import Poster from './Poster';

export default function Posters() {
  const [posters, setPosters] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/posters');
    setPosters(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
