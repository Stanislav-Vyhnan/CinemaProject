import { useState } from 'react';
import localization from '../../сonstants/localization';

export default function labelData() {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState('');
  const [age, setAge] = useState('');
  const [graphics, setGraphics] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [linkToYTTrailer, setLink] = useState('');

  const state = { genres, title, releaseDate, age, graphics, linkToYTTrailer };
  const setState = [
    { key: 'title', func: setTitle },
    { key: 'genres', func: setGenres },
    { key: 'age', func: setAge },
    { key: 'graphics', func: setGraphics },
    { key: 'releaseDate', func: setReleaseDate },
    { key: 'linkTrailerYT', func: setLink },
  ];
  const data = [
    { id: 'title', name: localization.TITLE, value: title, change: setTitle },
    {
      id: 'genres',
      name: localization.GENRES,
      value: genres,
      change: setGenres,
    },
    { id: 'age', name: localization.AGE, value: age, change: setAge },
    {
      id: 'graphics',
      name: localization.GRAPHICS,
      value: graphics,
      change: setGraphics,
    },
    {
      id: 'release-date',
      name: localization.RELEASE_DATE,
      value: releaseDate,
      change: setReleaseDate,
    },
    {
      id: 'linkYT',
      name: localization.LINK_TO_YT_TRAILER,
      value: linkToYTTrailer,
      change: setLink,
    },
  ];
  return [data, state, setState];
}
