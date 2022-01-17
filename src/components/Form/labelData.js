import { useState } from 'react';

export default function labelData() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState('');
  const [graphics, setGraphics] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [linkToYTTrailer, setLink] = useState('');

  const state = { genre, title, releaseDate, age, graphics, linkToYTTrailer };
  const setState = [
    { key: 'title', func: setTitle },
    { key: 'genre', func: setGenre },
    { key: 'age', func: setAge },
    { key: 'graphics', func: setGraphics },
    { key: 'releaseDate', func: setReleaseDate },
    { key: 'linkTrailerYT', func: setLink },
  ];
  const data = [
    { id: 'title', name: 'Title', value: title, change: setTitle },
    { id: 'genre', name: 'Genre', value: genre, change: setGenre },
    { id: 'age', name: 'Age', value: age, change: setAge },
    { id: 'graphics', name: 'Graphics', value: graphics, change: setGraphics },
    {
      id: 'release-date',
      name: 'Release date',
      value: releaseDate,
      change: setReleaseDate,
    },
    {
      id: 'linkYT',
      name: 'Link to YT trailer',
      value: linkToYTTrailer,
      change: setLink,
    },
  ];
  return [data, state, setState];
}
