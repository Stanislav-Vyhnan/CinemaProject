import { useState, useEffect } from 'react';
import axios from 'axios';

export default function swGetData() {
  const [posters, setPosters] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/posters');
    setPosters(response.data);
  };

  useEffect(() => {
    return getProducts();
  }, []);
}
