import { useState } from 'react';

export default function labelData() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState('');
  const [graphics, setGraphics] = useState('');
  const [releasedate, setReleaseDate] = useState('');

  const state = { title, genre, age, graphics, releasedate };
  const setState = [setTitle, setGenre, setAge, setGraphics, setReleaseDate];
  const data = [
    { id: 'title', name: 'Title', value: title, change: setTitle },
    { id: 'genre', name: 'Genre', value: genre, change: setGenre },
    { id: 'age', name: 'Age', value: age, change: setAge },
    { id: 'graphics', name: 'Graphics', value: graphics, change: setGraphics },
    {
      id: 'release-date',
      name: 'Release date',
      value: releasedate,
      change: setReleaseDate,
    },
  ];
  return [data, state, setState];
}
